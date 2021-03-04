import { Container, Items, Item, Name, Icon, NameDescription } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const PixList: React.FC = () => {
  const [infoItems, setInfoItems] = useState([])

  useEffect(() => {
    (async () => {
      let items = await fetch('/api/pix')
      const data: [] = await items.json()

      setInfoItems(data)
    })()
  }, [])

  return (
    <Container>
      {infoItems && (
        <Items>
          {infoItems.map(item => (
            <Item key={item.pix[0]?.value}>
              <Name>
                {item.name}

                {item.description && <NameDescription>({item.description})</NameDescription>}
              </Name>
              <Icon>
                <FontAwesomeIcon icon={faEye} />
              </Icon>
            </Item>
          ))}
        </Items>
      )}
    </Container>
  )
}

export default PixList
