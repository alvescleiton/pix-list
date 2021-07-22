import React, { ReactNode, useState } from 'react'

export type Props = {
  children: ReactNode
}

export const SearchContext = React.createContext<any>({})

export const SearchProvider = (props: Props) => {
  const [searchCtx, setSearchCtx] = useState('')

  return (
    <SearchContext.Provider value={{ searchCtx, setSearchCtx }}>
      {props.children}
    </SearchContext.Provider>
  )
}
