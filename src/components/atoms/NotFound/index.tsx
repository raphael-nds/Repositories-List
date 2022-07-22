import NotFoundImg from 'assets/images/not-found.svg'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

export const NotFound = () => {
   const [t] = useTranslation('default')

   return (
      <S.Wrapper>
         <img src={NotFoundImg} />
         <h3>{t('noResultsFound')}</h3>
      </S.Wrapper>
   )
}
