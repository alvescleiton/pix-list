import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
