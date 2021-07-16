import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Icon, Item, Name, NameDescription } from './styles'
import { PixItemInterface } from 'src/shared/types/pix'

type Props = {
  item: PixItemInterface
}

const PixItem = ({ item }: Props) => {
  return (
    <>
      {item && (
        <Item key={`item-${item.name}`}>
          <Name>
            {item.name}
          </Name>
          <Icon>
            <FontAwesomeIcon icon={faEye} />
          </Icon>
        </Item>
      )}
    </>
  )
}

export default PixItem
