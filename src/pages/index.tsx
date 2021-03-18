import { NextPage } from 'next'

import PixList from '@/components/Pix/PixList'
import Search from '@/components/Search'

const Home: NextPage = () => {
  return (
    <>
      <Search />

      <PixList />
    </>
  )
}

export default Home
