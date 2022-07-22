import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { colors, size } from 'styles/theme'

export const Container = styled.div`
   width: 100%;
   max-width: 1120px;
   display: flex;

   ${media.lessThan('medium')`
      display: block;
      max-width: 100%;
      margin: auto;
   `}
`

export const Th = styled.th`
   ${() => css`
      display: flex;
      align-items: center;

      height: 48px;
      width: 100%;

      cursor: pointer;

      > button {
         display: flex;
         align-items: center;
         cursor: pointer;
         width: 100%;
      }

      span {
         display: inline-block;

         font-size: 1.4rem;
         font-weight: 500;
         height: 100%;
      }

      button {
         margin-left: 16px;

         border: none;
         background: transparent;
      }

      ${media.lessThan('medium')`
         max-width: 100%;
         margin: 10px auto;
      `}

      ${media.lessThan('small')`
         max-width: 90%;
         display: block;
         margin: 30px auto;
      `}
   `}
`
export const Interaction = styled.section`
   display: flex;
   width: 100%;
   margin: ${size.small} auto;

   align-items: center;
   justify-content: space-between;

   > span {
      width: 75%;
      font-size: ${size.small};
      font-weight: 600;
      color: ${colors.personalization.purple};
   }

   ${media.lessThan('small')`{
      max-width: 90%;
      margin: auto;

   `}
`
