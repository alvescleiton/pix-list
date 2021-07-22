import React from 'react'
import { SearchContext } from '@/context/Search'

export const useSearch = () => React.useContext(SearchContext)
