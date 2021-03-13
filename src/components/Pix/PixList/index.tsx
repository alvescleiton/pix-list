import React from 'react'
import { Container, Items } from './styles'
import { useEffect, useState } from 'react'
import { PixListInterface } from 'src/shared/types/pix'
import PixItem from '@/components/Pix/PixItem'

const PixList: React.FC = () => {
  const [infoItems, setInfoItems] = useState<PixListInterface[]>([])

  useEffect(() => {
    (async () => {
      let items = await fetch('/api/pix')
      const data = await items.json()

      setInfoItems(data)
    })()
  }, [])

  return (
    <Container>
      {infoItems && (
        <Items>
          {infoItems.map((item) => (
            <PixItem key={`list-${item.name}`} item={item} />
          ))}
        </Items>
      )}
    </Container>
  )
}

export default PixList
