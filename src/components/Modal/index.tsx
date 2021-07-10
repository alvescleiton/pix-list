import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Background, Close, Container } from './styles'

import ReactDOM from 'react-dom'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose(isModalOpen: boolean): void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <Background visible={isOpen}>
      <Container visible={isOpen}>
        <Close onClick={() => onClose(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </Close>

        { children }
      </Container>
    </Background>
  )
}

export default Modal
