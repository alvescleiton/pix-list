import React, { ReactNode, useEffect, useState } from 'react'
import { PixItemInterface } from '../shared/types/pix'

export type Props = {
  children: ReactNode
}

export const PixListContext = React.createContext<any>({})

export const PixListProvider = (props: Props) => {
  const [pixListCtx, setPixListCtx] = useState<PixItemInterface[]>([])
  const [loadingPixList, setLoadingPixList] = useState(true)

  useEffect(() => {
    (async () => {
      let items = await fetch('/api/pix/list')
      const data = await items.json()

      const list = data.sort((a: PixItemInterface, b: PixItemInterface) => {
        const item_a = a.name.toUpperCase()
        const item_b = b.name.toUpperCase()

        return (item_a < item_b) ? -1 : (item_a > item_b) ? 1 : 0
      })

      setPixListCtx(list)

      setLoadingPixList(false)
    })()
  }, [])

  return (
    <PixListContext.Provider value={{ pixListCtx, setPixListCtx, loadingPixList }}>
      {props.children}
    </PixListContext.Provider>
  )
}
