import { NextPage } from 'next'

import Header from '@/components/Header'
import PixList from '@/components/PixList'
import Search from '@/components/Search'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Search />

      <PixList />
    </>
  )
}

export default Home
