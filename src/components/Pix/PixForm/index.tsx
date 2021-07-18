import React, { useState } from 'react'
import { FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { Container, Title } from './styles'
import { PixItemInterface } from '@/shared/types/pix'
import { PixTypesList } from '@/shared/consts'
import { usePixList } from '@/hooks/PixList'
import { useEffect } from 'react';
import InputMask from 'react-input-mask'

interface Props {
  pixItem?: PixItemInterface
  closeModal?(): void
}

enum TypeForm {
  'ADD' = 1,
  'EDIT' = 2
}

const PixForm = ({ closeModal, pixItem }: Props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState(0)
  const [pixKey, setPixKey] = useState('')
  const [mask, setMask] = useState('')
  const [typeForm, setTypeForm] = useState(TypeForm.ADD)
  const { pixListCtx, setPixListCtx } = usePixList()

  useEffect(() => {
    if (pixItem) {
      setName(pixItem.name)
      setDescription(pixItem.description)
      setType(pixItem.type || 0)
      setPixKey(pixItem.pixKey)

      setTypeForm(TypeForm.EDIT)
    }
  }, [pixItem])

  function handleSelect(event: any) {
    var target = event.target as HTMLSelectElement
    var value: number = parseInt(target.value)

    const masks = {
      [PixTypesList.CPF.id]: '999.999.999-99',
      [PixTypesList.TELEFONE.id]: '(99) 99999-9999',
      'default': ''
    }

    setMask(masks[value] || masks['default'])

    setType(value)
  }

  async function handleButton() {
    let data = null
    let list: PixItemInterface[] = [...pixListCtx]

    if (typeForm === TypeForm.ADD) {
      data = await addPix()

      list.push(data)
    } else {
      data = await editPix()

      list = list.filter(e => e._id != data._id)

      list = [...list, data]
    }

    setPixListCtx(list)

    closeModal()

    clearFields()
  }

  async function addPix() {
    const obj: PixItemInterface = {
      name,
      description,
      type,
      pixKey,
    }

    const response = await fetch('/api/pix/add',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })

    const data = await response.json()

    return data
  }

  async function editPix() {
    const obj: PixItemInterface = {
      _id: pixItem._id,
      name,
      description,
      type,
      pixKey,
    }

    const response = await fetch('/api/pix/edit',
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })

    const data = await response.json()

    return data
  }

  function clearFields() {
    setName('')
    setDescription('')
    setType(0)
    setPixKey('')
  }

  return (
    <Container>
      <Title>Cadastro</Title>

      <form onSubmit={() => false}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input
            id="nome"
            aria-describedby="nome"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="description">Descrição</InputLabel>
          <Input
            id="description"
            aria-describedby="description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="tipo">Tipo</InputLabel>
          <Select
            id="tipo"
            value={type > 0 ? type : ''}
            onChange={handleSelect}
          >
            {Object.keys(PixTypesList).map(key => {
              const item = PixTypesList[key]

              return <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="chave_pix">Chave PIX</InputLabel>
          <InputMask
            mask={mask}
            maskChar={null}
            autoComplete="off"
            value={pixKey}
            onChange={(e) => setPixKey(e.target.value)}
          >
            {(inputProps: any) => (
              <Input
                {...inputProps}
                id="chave_pix"
                aria-describedby="chave_pix"
                value={pixKey}
              />
            )}
          </InputMask>
        </FormControl>

        <FormControl fullWidth margin="normal"></FormControl>

        <FormControl fullWidth margin="normal">
          <Button
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            onClick={handleButton}
          >
            {typeForm === TypeForm.ADD ? 'Gravar' : 'Editar'}
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default PixForm
