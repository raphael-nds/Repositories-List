import styled, { css } from 'styled-components'
import { SelectLanguageProps } from '.'

export const Wrapper = styled.select<Pick<SelectLanguageProps, 'color'>>`
   ${({ theme, color }) => css`
      height: 32px;
      width: 70px;
      background: transparent;
      border: none;
      padding-bottom: 4px;
   `}
`
