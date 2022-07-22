import { useTranslation } from 'react-i18next'
import { AiFillGithub } from 'react-icons/ai'

import * as S from './styles'

export const Logo = () => {
   const [t] = useTranslation('default')

   return (
      <S.Wrapper>
         <AiFillGithub />
         <span>{t('repositories')}</span>
      </S.Wrapper>
   )
}
