import React, { useState } from 'react'
import { Container, Items } from './styles'
import { PixItemInterface } from 'src/shared/types/pix'
import PixItem from '@/components/Pix/PixItem'
import { usePixList } from '@/hooks/PixList'

import PixForm from '@/components/Pix/PixForm'
import Modal from '@/components/Modal'

const PixList: React.FC = () => {
  const { pixListCtx } = usePixList()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pixItem, setPixItem] = useState<PixItemInterface |  null>(null)

  function handleShowItem(item: PixItemInterface) {
    setPixItem(item)
    setIsModalOpen(true)
  }

  if (!pixListCtx) return

  return (
    <>
      <Container>
        {pixListCtx && (
          <Items>
            {pixListCtx.map((item: PixItemInterface) => (
              <PixItem
                key={item._id}
                item={item}
                handleShowItem={handleShowItem}
              />
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
          pixItem={pixItem}
        />
      </Modal>
    </>
  )
}

export default PixList
