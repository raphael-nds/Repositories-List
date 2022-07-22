import { Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { size } from 'styles/theme'
import * as S from './styles'

export type RepositoriesCardProps = {
   name: string
   dataCreate: string
   dataUpdated: string
   html_url: string
}

export const RepositoriesCard = ({
   name,
   dataCreate,
   dataUpdated,
   html_url
}: RepositoriesCardProps) => {
   const [t] = useTranslation('default')

   return (
      <S.Wrapper>
         <S.Card>
            <header>
               <span className="title">{name}</span>
               <a className="description" href={html_url}>
                  {t('url')}
                  {html_url}
               </a>
            </header>
            <footer>
               <Divider marginY={size.xsmall} />
               <p>
                  {t('created')}
                  {dataCreate}
               </p>
               <p>
                  {t('updated')}
                  {dataUpdated}
               </p>
            </footer>
         </S.Card>
      </S.Wrapper>
   )
}
