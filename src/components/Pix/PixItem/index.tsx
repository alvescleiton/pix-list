import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Icon, Item, Name } from './styles'
import { PixItemInterface } from '@/shared/types/pix'

type Props = {
  item: PixItemInterface
  handleShowItem?(item: PixItemInterface): void
}

const PixItem = ({ item, handleShowItem }: Props) => {
  return (
    <>
      {item && (
        <Item key={`item-${item.name}`}>
          <Name>
            {item.name}
          </Name>
          <Icon onClick={() => handleShowItem(item)}>
            <FontAwesomeIcon icon={faEye} />
          </Icon>
        </Item>
      )}
    </>
  )
}

export default PixItem
