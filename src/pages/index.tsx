import { NextPage } from 'next'

import Header from '@/components/Header'
import PixList from '@/components/PixList'
import Search from '@/components/Search'
import Footer from '@/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Search />

      <PixList />

      <Footer />
    </>
  )
}

export default Home
