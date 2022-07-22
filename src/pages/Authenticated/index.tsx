import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Button, Text } from '@chakra-ui/react'
import moment from 'moment'

import { RepositoriesCard } from 'components/molecules/RepositoriesCard'
import { InputSearch } from 'components/atoms/InputSearch'

import * as S from './styles'
import { colors } from 'styles/theme'

import {
   RepositoriesData,
   useServiceRepositories
} from 'services/useServiceRepositories'

import { TemplateAuthenticated } from 'templates/Authenticated'

import { useAuth } from 'contexts/AuthContext'

export const PageAutenticated = () => {
   const [t] = useTranslation('default')

   const { handleSignOut, user } = useAuth()

   const [filter, setFilter] = useState('')

   const dataFromUser = JSON.parse(user)

   const ths = [
      {
         title: t('name'),
         filterName: 'name'
      },
      {
         title: t('lastUpdate'),
         filterName: 'date'
      }
   ]

   const { getRepositoriesAuthenticated } = useServiceRepositories()

   const [dataRepositories, setDataRepositories] = useState<RepositoriesData[]>(
      []
   )
   const [dataRepositoriesAll, setDataRepositoriesAll] = useState<
      RepositoriesData[]
   >([])

   const ReturnRepositories = async () => {
      const response = await getRepositoriesAuthenticated()

      setDataRepositories(response)
      setDataRepositoriesAll(response)
   }

   const onFilter = (value: string) => {
      if (value.length > 0) {
         const filter = dataRepositoriesAll.filter(
            (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
         )

         setDataRepositories(filter)
      } else {
         setDataRepositories(dataRepositoriesAll)
      }
   }

   const onOrderList = (value: string) => {
      const list = [...dataRepositories]
      let auxValue = ''

      if (value === 'name') {
         if (filter.indexOf(value) === -1) {
            auxValue = value + '_ASC'
            list.sort((a, b) =>
               a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            )
         } else {
            list.sort((a, b) =>
               a.name > b.name ? -1 : b.name > a.name ? 1 : 0
            )
         }
      }
      if (value === 'date') {
         if (filter.indexOf(value) === -1) {
            auxValue = value + '_ASC'
            list.sort((a, b) =>
               a.updated_at > b.updated_at
                  ? 1
                  : b.updated_at > a.updated_at
                  ? -1
                  : 0
            )
         } else {
            list.sort((a, b) =>
               a.updated_at > b.updated_at
                  ? -1
                  : b.updated_at > a.updated_at
                  ? 1
                  : 0
            )
         }
      }
      setFilter(auxValue)
      setDataRepositories(list)
   }

   useEffect(() => {
      ReturnRepositories()
   }, [])

   return (
      <TemplateAuthenticated>
         <S.Container>
            <InputSearch
               onChange={(e) => onFilter(e.target.value)}
               placeholder={t('search')}
            />

            <S.Th>
               {ths.map((th) => (
                  <div key={th.filterName}>
                     <button
                        type="button"
                        onClick={() => onOrderList(th.filterName)}
                     >
                        <span>{th.title}</span>

                        <button type="button">
                           {!(filter.indexOf(th.filterName) > -1) ? (
                              <FiChevronUp
                                 size={20}
                                 color={colors.personalization.purple}
                              />
                           ) : (
                              <FiChevronDown
                                 size={20}
                                 color={colors.personalization.purple}
                              />
                           )}
                        </button>
                     </button>
                  </div>
               ))}
            </S.Th>
         </S.Container>

         <S.Interaction>
            <span>
               {t('welcome', {
                  value: `${dataFromUser.displayName}`
               })}
            </span>

            <Button width="auto" onClick={() => handleSignOut()}>
               <Text>{t('signOut')}</Text>
            </Button>
         </S.Interaction>

         {dataRepositories?.map((data: RepositoriesData) => (
            <RepositoriesCard
               key={data.name}
               name={data.name}
               dataCreate={moment(data.created_at).format('DD/MM/YYYY')}
               dataUpdated={moment(data.updated_at).format('DD/MM/YYYY')}
               html_url={data.html_url}
            />
         ))}

         {dataRepositories.length === 0 && (
            <span>{t('noRepositoryFound')}</span>
         )}
      </TemplateAuthenticated>
   )
}
