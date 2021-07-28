import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ContextWordsProvider from "../context/useSearch"
import Head from 'next/head'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lora', serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <ContextWordsProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;1,400;1,700&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
      </ContextWordsProvider>
    </>
  )
}
