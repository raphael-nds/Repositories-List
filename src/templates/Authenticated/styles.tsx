import styled from 'styled-components'

export const Wrapper = styled.div`
   display: grid;
   width: 100vw;
   max-width: 1120px;

   padding: 0 24px;
   margin: auto;
`
export const Container = styled.div`
   min-height: 100vh;
   padding-bottom: 75px;
`

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   gap: 16px;
`
