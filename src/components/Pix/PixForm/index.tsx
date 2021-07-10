import React from 'react'
import { FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Container, Title } from './styles'

const PixForm = () => {
  return (
    <Container>
      <Title>Cadastro</Title>

      <form onSubmit={() => false}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input id="nome" aria-describedby="nome" autoComplete="off" />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="tipo">Tipo</InputLabel>
          <Select
            id="tipo"
          >
            <MenuItem value={1}>E-mail</MenuItem>
            <MenuItem value={2}>CPF</MenuItem>
            <MenuItem value={3}>Telefone</MenuItem>
            <MenuItem value={4}>Chave Gerada</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="chave_pix">Chave PIX</InputLabel>
          <Input id="chave_pix" aria-describedby="chave_pix" autoComplete="off" />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="observacao">Observação</InputLabel>
          <Input id="observacao" aria-describedby="observacao" autoComplete="off" />
        </FormControl>

        <FormControl fullWidth margin="normal"></FormControl>

        <FormControl fullWidth margin="normal">
          <Button variant="contained" color="primary" size="large" disableElevation>
            Gravar
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default PixForm
