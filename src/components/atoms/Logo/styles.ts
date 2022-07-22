import styled from 'styled-components'
import media from 'styled-media-query'
import { size } from 'styles/theme'

export const Wrapper = styled.main`
   display: flex;
   align-items: center;

   font-size: ${size.small};

   > span {
      margin: 0 10px;
   }
   ${media.lessThan('small')`
      justify-content: center;
   `}
`
