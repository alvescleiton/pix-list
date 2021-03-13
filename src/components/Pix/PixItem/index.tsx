import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Icon, Item, Name, NameDescription } from './styles'
import { PixListInterface } from 'src/shared/types/pix'

type Props = {
  item: PixListInterface
}

const PixItem = ({ item }: Props) => {
  return (
    <>
      {item && (
        <Item key={`item-${item.name}`}>
          <Name>
            {item.name}

            {item.description && <NameDescription>({item.description})</NameDescription>}
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
