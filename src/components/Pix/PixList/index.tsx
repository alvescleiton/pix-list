import React, { useState } from 'react'
import { Container, Items } from './styles'
import { PixItemInterface } from 'src/shared/types/pix'
import PixItem from '@/components/Pix/PixItem'
import { usePixList } from '@/hooks/usePixList'
import Loading from '@/components/Loading'
import PixForm from '@/components/Pix/PixForm'
import Modal from '@/components/Modal'
import NoItemsToShow from '@/components/NoItemsToShow'
import { useSearch } from '@/hooks/useSearch'

const PixList: React.FC = () => {
  const { pixListCtx, loadingPixList } = usePixList()
  const { searchCtx } = useSearch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pixItem, setPixItem] = useState<PixItemInterface |  null>(null)

  function handleShowItem(item: PixItemInterface) {
    setPixItem(item)
    setIsModalOpen(true)
  }

  return (
    <>
      <Container>
        {loadingPixList && (
          <Loading />
        )}

        {!loadingPixList && (
          <>
            {pixListCtx.length > 0 && (
              <Items>
                { pixListCtx
                  .filter((e: PixItemInterface) => e.name.toLowerCase().includes(searchCtx.toLowerCase()))
                  .map((item: PixItemInterface) => (
                    <PixItem
                      key={item._id}
                      item={item}
                      handleShowItem={handleShowItem}
                    />
                  ))
                }
              </Items>
            )}

            {!pixListCtx.length && (
              <NoItemsToShow />
            )}
          </>
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
