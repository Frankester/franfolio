import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --color-ligth: #e1e1e1;
    --color-dark: #1C1C1C;
    --color-white: #FAFAFF;
    --color-silver: #b0af48;
    --color-alabaster: #ECEBE4;
  }

  *, *::after, *::before{
    box-sizing: border-box;
  }

  html,body, #root{
    height:100%;
    box-sizing: inherit;
  }

  body{
    background-color: var(--color-ligth);
    margin:0;
    font-family: 'Open Sans',sans-serif;
    scroll-behavior: smooth;
  }

  p{
    font-size: 1.25rem;
  }

  img{
    object-fit: cover;
  }

  #root {
    isolation: isolate;
  }
`


const MainApp = styled.div`
  height:100%;
`

const Section = styled.section`
  margin: 0 auto;
  text-align:center;
  scroll-margin: 100px;
  max-width: 90%;


  @media only screen and (min-width: 768px){
    max-width: 60%;
  }

  h2{
    text-transform: uppercase;
    margin: 1em 0;
    font-size: 2.2rem;
  }
`


export { Section, GlobalStyle, MainApp }
