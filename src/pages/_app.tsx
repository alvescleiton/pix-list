import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PixListProvider } from 'src/context/PixList'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <PixListProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PixListProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
