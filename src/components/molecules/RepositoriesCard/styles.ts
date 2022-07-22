import styled from 'styled-components'
import media from 'styled-media-query'

import { colors, radius, size } from 'styles/theme'

export const Wrapper = styled.main`
   display: grid;
   width: 100%;
   background: linear-gradient(
      135deg,
      ${colors.main.blackOpacity},
      ${colors.main.black}
   );
   -webkit-backdrop-filter: blur(20px);
   backdrop-filter: blur(20px);
   box-shadow: 0 8px 32px 0 ${colors.main.shadow};
   border: 1px solid ${colors.main.grey};
   border-radius: ${radius.lg};

   ${media.lessThan('small')`
      max-width: 90%;
      display: block; 
      margin: auto;
     
   `};
`

export const Card = styled.div`
   padding: 10px;

   > header {
      min-height: max-content;

      span {
         display: block;
      }

      span.title {
         font-size: ${size.medium};
         color: ${colors.personalization.purple};
      }

      a.description {
         font-size: ${size.xsmall};
         // color: ${colors.main.main};
         margin-top: -10px;
      }
   }

   > footer {
   }
`
