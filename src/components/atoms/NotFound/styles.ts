import styled, { css } from 'styled-components'
import { size } from 'styles/theme'

export const Wrapper = styled.div`
   ${() => css`
      display: flex;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
         height: 180px;
         width: 180px;
      }

      > h3 {
         font-size: ${size.large};
         font-weight: 700;
         line-height: 2.4rem;

         margin-top: 3rem;
      }
   `}
`
