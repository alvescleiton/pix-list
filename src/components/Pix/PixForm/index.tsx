import React, { useState } from 'react'
import { FormControl, Input, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import { Container, Title } from './styles'
import { PixItemInterface } from '@/shared/types/pix'
import { PixTypesList } from '@/shared/consts'
import { usePixList } from '@/hooks/usePixList'
import { useEffect } from 'react'
import MaskedInput from 'react-text-mask'
import { validateCPF, validateEmail } from '@/shared/utils/validation'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPen, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons'

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
  const [mask, setMask] = useState<(string | RegExp)[]>([])
  const [typeForm, setTypeForm] = useState(TypeForm.ADD)
  const { pixListCtx, setPixListCtx } = usePixList()

  useEffect(() => {
    if (pixItem) {
      setName(pixItem.name)
      setDescription(pixItem.description)
      setType(pixItem.type || 0)
      setPixKey(pixItem.pixKey)

      setPixMask(pixItem.type)

      setTypeForm(TypeForm.EDIT)
    }
  }, [pixItem])

  function setPixMask(value: number) {
    const masks = {
      [PixTypesList.CPF.id]: [/\d/, /\d/, /\d/, '.' ,/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
      [PixTypesList.TELEFONE.id]: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      'default': Array.from(Array(150)).map(() => /./)
    }

    setMask(masks[value] || masks['default'])
  }

  function handleSelect(event: any) {
    var target = event.target as HTMLSelectElement
    var value: number = parseInt(target.value)

    setType(value)

    setPixMask(value)
  }

  async function handleButton() {
    let data = null
    let list: PixItemInterface[] = [...pixListCtx]

    if (typeForm === TypeForm.ADD) {
      data = await addPix()

      if (!data) return false

      list.push(data)
    } else {
      data = await editPix()

      if (!data) return false

      list = list.filter(e => e._id != data._id)

      list = [...list, data].sort((a: PixItemInterface, b: PixItemInterface) => {
        const item_a = a.name.toUpperCase()
        const item_b = b.name.toUpperCase()

        return (item_a < item_b) ? -1 : (item_a > item_b) ? 1 : 0
      })
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

    const validate = validateForm()
    if (!validate) return false

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

    const validate = validateForm()
    if (!validate) return false

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

  function validateForm() {
    if (!name || name.length < 3) {
      toast('Preencha o nome corretamente!')
      return false
    }

    if (!type) {
      toast('Tipo inválido!')
      return false
    }

    if (type === PixTypesList.CPF.id) {
      if (!validateCPF(pixKey)) {
        toast('CPF inválido!')
        return false
      }
    }

    if (type === PixTypesList.EMAIL.id) {
      if (!validateEmail(pixKey)) {
        toast('E-mail inválido!')
        return false
      }
    }

    if (!pixKey) {
      toast('Preencha uma chave!')
      return false
    }

    return true
  }

  function clearFields() {
    setName('')
    setDescription('')
    setType(0)
    setPixKey('')
  }

  async function handleDelete() {
    if (confirm("Deseja realmente remover este item?")) {
      await fetch('/api/pix/delete',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(pixItem)
      })

      let list: PixItemInterface[] = [...pixListCtx]

      list = list.filter(e => e._id != pixItem._id)

      list.sort((a: PixItemInterface, b: PixItemInterface) => {
        const item_a = a.name.toUpperCase()
        const item_b = b.name.toUpperCase()

        return (item_a < item_b) ? -1 : (item_a > item_b) ? 1 : 0
      })

      setPixListCtx(list)

      closeModal()

      clearFields()
    }

    return true
  }

  function handleCopyPixCode() {
    var input = document.getElementById('chave_pix') as HTMLInputElement
    input.focus()
    input.select()
    document.execCommand('copy')
    input.blur()

    toast('Código PIX cópiado!')
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
          <MaskedInput
            id="chave_pix"
            aria-describedby="chave_pix"
            mask={mask}
            guide={false}
            onChange={(e) => setPixKey(e.target.value)}
            render={(ref: any, props: any) => (
              <Input
                inputRef={ref}
                value={pixKey}
                {...props}
              />
            )}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <Button
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            onClick={handleButton}
          >
            {
              typeForm === TypeForm.ADD ? (
                <>
                  <FontAwesomeIcon icon={faSave} /> &nbsp;
                  Gravar
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPen} /> &nbsp;
                  Editar
                </>
              )
            }
          </Button>
        </FormControl>

        {pixItem && (
          <>
            <br /><br />

            <FormControl fullWidth margin="dense">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                disableElevation
                onClick={handleDelete}
              >
                <FontAwesomeIcon icon={faTrash} /> &nbsp;
                Excluir
              </Button>
            </FormControl>

            <FormControl fullWidth margin="dense">
              <Button
                variant="contained"
                size="large"
                disableElevation
                onClick={handleCopyPixCode}
              >
                <FontAwesomeIcon icon={faCopy} /> &nbsp;
                Copiar Chave PIX
              </Button>
            </FormControl>
          </>
        )}

      </form>
    </Container>
  )
}

export default PixForm
