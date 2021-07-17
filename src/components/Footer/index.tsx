import React from "react"
import Modal from "@/components/Modal"
import PixForm from "@/components/Pix/PixForm"
import { Container, ButtonPlus } from "./styles"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <Container>
        <ButtonPlus onClick={() => setIsModalOpen(true)}>+</ButtonPlus>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
      >
        <PixForm
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}

export default Footer
