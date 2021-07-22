import React, { useCallback, useState } from 'react'
import { debounce } from "lodash";
import { Container, Input } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { usePixList } from '@/hooks/PixList'
import { PixItemInterface } from '@/shared/types/pix'

const Search: React.FC = () => {
  const { defaultPixListCtx, setPixListCtx, loadingPixList } = usePixList()
  const [ searchInput, setSearchInput ] = useState('')
  const debounceFn = useCallback(debounce(filterPixList, 1000), [])

  function filterPixList(pixListCtx: PixItemInterface[], name: string) {
    let list: PixItemInterface[] = pixListCtx

    list = list
      .filter((e: PixItemInterface) => e.name
        .toLowerCase()
        .includes(name.toLowerCase())
      )

    setPixListCtx(list)
  }

  function handleSearch(event: any) {
    const value = event.target.value

    setSearchInput(value)

    debounceFn(defaultPixListCtx, value)
  }

  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        type="search"
        placeholder="buscar"
        onChange={handleSearch}
        disabled={loadingPixList}
        value={searchInput}
      />
    </Container>
  )
}

export default Search
