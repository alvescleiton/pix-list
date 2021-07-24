import React from 'react'
import { SearchContext } from '@/context/SearchProvider'

export const useSearch = () => React.useContext(SearchContext)
