import React, { useState } from 'react'
import { FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Container, Title } from './styles'
import { PixItemInterface } from 'src/shared/types/pix';
import { PixTypesList } from 'src/shared/consts';
import { usePixList } from 'src/hooks/PixList';
import { useEffect } from 'react';

interface Props {
  pixItem?: PixItemInterface
  closeModal?(): void
}

const PixForm = ({ closeModal, pixItem }: Props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState(0)
  const [pixKey, setPixKey] = useState('')
  const { pixListCtx, setPixListCtx } = usePixList()

  useEffect(() => {
    setName(pixItem?.name)
    setDescription(pixItem?.description)
    setType(pixItem?.type || 0)
    setPixKey(pixItem?.pixKey)
  }, [pixItem])

  function handleSelect(event: any) {
    var target = event.target as HTMLSelectElement
    var value: number = parseInt(target.value)

    setType(value)
  }

  async function handleButton() {
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

    await response.json()

    const list: PixItemInterface[] = [
      ...pixListCtx,
      obj
    ]

    setPixListCtx(list)

    closeModal()

    clearFields()
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
          <Input
            id="chave_pix"
            aria-describedby="chave_pix"
            autoComplete="off"
            value={pixKey}
            onChange={(e) => setPixKey(e.target.value)}
            disabled={type==0}
          />
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
            Gravar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default PixForm
