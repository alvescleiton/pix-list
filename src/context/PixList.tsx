import React, { ReactNode, useEffect, useState } from 'react'
import { PixItemInterface } from '../shared/types/pix'

export type Props = {
  children: ReactNode
}

export const PixListContext = React.createContext<any>({})

export const PixListProvider = (props: Props) => {
  const [pixListCtx, setPixListCtx] = useState<PixItemInterface[]>([])

  useEffect(() => {
    (async () => {
      let items = await fetch('/api/pix')
      const data = await items.json()

      setPixListCtx(data)
    })()
  }, [])

  return (
    <PixListContext.Provider value={{ pixListCtx, setPixListCtx }}>
      {props.children}
    </PixListContext.Provider>
  )
}
