import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
   display: flex;
   width: 100%;
   max-width: 1120px;

   margin: auto;
   padding: 30px 10px;

   justify-content: space-between;

   ${media.lessThan('small')`
      display: block;
   `}
`
export const ContainerRight = styled.div`
   display: flex;
   align-items: center;

   ${media.lessThan('small')`
      justify-content: center;
   `}
`
