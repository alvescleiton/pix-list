import { Container, Items, Item, Name, Icon, NameDescription } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const PixList: React.FC = () => {
  const infoItems = [
    {
      name: 'Cleiton',
      description: null,
      pix: [
        {
          type: 1,
          title: 'CPF',
          value: '299.067.908-14',
          description: 'Banco Inter'
        },
        {
          type: 2,
          title: 'E-mail',
          value: 'cleiton_jc@yahoo.com.br',
          description: null
        }
      ]
    },
    {
      name: 'Edson Henrique',
      description: 'Sobrinho',
      pix: [
        {
          type: 1,
          title: 'E-mail',
          value: '255.264.154-24',
          description: null
        }
      ]
    },
    {
      name: 'Teste',
      description: 'Um teste',
      pix: [
        {
          type: 3,
          title: 'Código',
          value: '29HF94H0CHS',
          description: 'Código gerado aleatóriamente'
        }
      ]
    }
  ]

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
