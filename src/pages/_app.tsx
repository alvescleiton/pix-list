import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PixListProvider } from 'src/context/PixList'
import { SearchProvider } from '@/context/Search'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <PixListProvider>
          <Head>
            <title>Pix List</title>
          </Head>

          <Header />
          <Component {...pageProps} />
          <Footer />

          <ToastContainer
            position="top-center"
            autoClose={3000}
          />
        </PixListProvider>
      </SearchProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
