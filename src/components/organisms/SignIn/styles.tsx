import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
   width: 100%;
   max-width: 1120px;
   display: flex;

   ${media.lessThan('small')`
      max-width: 90%;
      margin: auto;   
   `}
`

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
