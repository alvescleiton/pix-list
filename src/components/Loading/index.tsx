import React from 'react'
import { Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faCircleNotch} />
    </Container>
  )
}

export default Loading
