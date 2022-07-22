import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { colors, radius, size } from 'styles/theme'

type WrapperProps = {
   filled: boolean
   focused: boolean
   error: boolean
}

export const Container = styled.div`
   width: 100%;
   max-width: 400px;

   ${media.lessThan('small')`
      max-width: 90%;
      margin: auto;
   `}
`

export const Wrapper = styled.div<WrapperProps>`
   ${({ focused, error }) => css`
      border: 1px solid ${colors.main.lightGrey};
      border-radius: ${radius.full};
      padding: 0.2rem ${size.xsmall};
      display: flex;
      align-items: center;
      ${focused &&
      css`
         border: 1px solid ${colors.personalization.purple};
      `}
      ${error &&
      css`
         border: 1px solid ${colors.alerts.red};
      `}
   `}
`

export const Input = styled.input`
   ${() => css`
      font-size: ${size.small};
      outline: none;
      border: none;
      background-color: transparent;
      &::placeholder {
         font-size: ${size.small};
      }
   `}
`
