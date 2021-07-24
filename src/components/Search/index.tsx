import React, { useCallback, useState } from 'react'
import { debounce } from "lodash"
import { Container, Input } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '@/hooks/useSearch'

const Search: React.FC = () => {
  const [ searchInput, setSearchInput ] = useState('')
  const { setSearchCtx } = useSearch()
  const debounceFn = useCallback(debounce(setSearchInfo, 1000), [])

  function setSearchInfo(name: string) {
    setSearchCtx(name)
  }

  function handleSearch(event: any) {
    const value = event.target.value

    setSearchInput(value)

    debounceFn(value)
  }

  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        type="search"
        placeholder="buscar"
        onChange={handleSearch}
        value={searchInput}
      />
    </Container>
  )
}

export default Search
