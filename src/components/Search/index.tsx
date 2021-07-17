import { Container, Input } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Search: React.FC = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input type="search" placeholder="buscar" />
    </Container>
  )
}

export default Search
