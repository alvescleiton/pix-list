import React, { useState } from 'react'
import { FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Container, Title } from './styles'
import { PixItemInterface } from 'src/shared/types/pix';

const PixForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState(0)
  const [pixKey, setPixKey] = useState('')

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

    const content = await response.json()

    console.log(content)
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
            <MenuItem value={1}>E-mail</MenuItem>
            <MenuItem value={2}>CPF</MenuItem>
            <MenuItem value={3}>Telefone</MenuItem>
            <MenuItem value={4}>Chave Gerada</MenuItem>
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
