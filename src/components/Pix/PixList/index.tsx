import React, { useState } from 'react'
import { Container, Items } from './styles'
import { PixItemInterface } from 'src/shared/types/pix'
import PixItem from '@/components/Pix/PixItem'
import { usePixList } from 'src/hooks/PixList'

import PixForm from '../PixForm'
import Modal from '@/components/Modal'

const PixList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pixListCtx } = usePixList()

  if (!pixListCtx) return

  return (
    <>
      <Container>
        {pixListCtx && (
          <Items>
            {pixListCtx.map((item: PixItemInterface) => (
              <PixItem key={item._id} item={item} />
            ))}
          </Items>
        )}
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

export default PixList
