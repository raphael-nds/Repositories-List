import { Footer } from 'components/molecules/Footer'
import { Header } from 'components/molecules/Header'

import * as S from './styles'

type Props = {
   children?: React.ReactNode
}

export const TemplateNotAutenticated = ({ children }: Props) => {
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <S.Content>{children}</S.Content>
         </S.Container>

         <Footer />
      </S.Wrapper>
   )
}
