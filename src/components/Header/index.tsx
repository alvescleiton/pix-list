import { Container, Title } from './styles'
import Search from '@/components/Search'

const Header: React.FC = () => {
  return (
    <Container>
      <Title>Pix List</Title>

      <Search />
    </Container>
  )
}

export default Header
