import React, { useContext } from 'react'
import { Container, Items } from './styles'
import { PixItemInterface } from 'src/shared/types/pix'
import PixItem from '@/components/Pix/PixItem'
import { usePixList } from 'src/hooks/PixList'

const PixList: React.FC = () => {
  const { pixListCtx } = usePixList()

  return (
    <Container>
      {pixListCtx && (
        <Items>
          {pixListCtx.map((item: PixItemInterface) => (
            <PixItem key={`list-${item.name}`} item={item} />
          ))}
        </Items>
      )}
    </Container>
  )
}

export default PixList
