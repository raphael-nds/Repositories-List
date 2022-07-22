import { RepositoriesCard } from 'components/molecules/RepositoriesCard'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
   RepositoriesData,
   useServiceRepositories
} from 'services/useServiceRepositories'

import { TemplateNotAutenticated } from 'templates/NotAuthenticated'

import { Login } from 'components/organisms/SignIn'

import * as S from './styles'

type Props = {
   children?: React.ReactNode
}

export const PageNotAutenticated = ({ children }: Props) => {
   const [t] = useTranslation('default')
   const { getRepositories } = useServiceRepositories()

   const [dataRepositories, setDataRepositories] = useState<RepositoriesData[]>(
      []
   )

   const [dataRepositoriesAll, setDataRepositoriesAll] = useState<
      RepositoriesData[]
   >([])

   const ReturnRepositories = async () => {
      const response = await getRepositories()

      setDataRepositories(response)
      setDataRepositoriesAll(response)
   }

   useEffect(() => {
      ReturnRepositories()
   }, [])

   return (
      <TemplateNotAutenticated>
         <S.Container>
            <article>
               <span>{t('initialPageNotAuthenticated')}</span>
               <span>{t('myRepositories')}</span>
            </article>

            <div>
               <Login />
            </div>
         </S.Container>
         {dataRepositories?.map((data: RepositoriesData) => (
            <RepositoriesCard
               key={data.name}
               name={data.name}
               dataCreate={moment(data.created_at).format('DD/MM/YYYY')}
               dataUpdated={moment(data.updated_at).format('DD/MM/YYYY')}
               html_url={data.html_url}
            />
         ))}
      </TemplateNotAutenticated>
   )
}
