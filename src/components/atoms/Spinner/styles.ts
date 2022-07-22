import styled, { css, keyframes } from 'styled-components'
import { colors } from 'styles/theme'

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

export const Container = styled.div`
   ${() => css`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 10;
      &:before,
      &:after {
         content: '';
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         border-width: 0.5rem;
         border-color: transparent;
         border-style: solid;
         border-radius: 50%;
      }
      &:after {
         width: 6rem;
         height: 6rem;
         border-left: 0.5rem solid ${colors.personalization.purple};
         border-top: 0.5rem solid ${colors.personalization.purple};
         animation: ${rotate()} 600ms linear infinite;
      }
   `}
`
