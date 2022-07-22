import styled from 'styled-components'
import media from 'styled-media-query'
import { size } from 'styles/theme'

export const Container = styled.div`
   width: 100%;

   align-items: center;
   justify-content: space-between;

   article {
      span {
         display: block;
         text-align: center;

         :last-child {
            margin: ${size.small} auto;
         }
      }
   }

   div {
      width: 100%;
      display: flex;

      justify-content: center;
   }

   ${media.lessThan('small')`
      display: block;
      width: 90%;
      margin: auto;

      article {
         display: none;
      }
   
   `}
`
