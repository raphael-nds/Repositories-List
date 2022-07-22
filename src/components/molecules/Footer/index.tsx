import { Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { size } from 'styles/theme'
import * as S from './styles'

export const Footer = () => {
   const [t] = useTranslation('default')
   return (
      <S.Wrapper>
         <Divider my={size.small} mx={size.auto} width="75%" />

         <span> {t('createdBy')}</span>
      </S.Wrapper>
   )
}
