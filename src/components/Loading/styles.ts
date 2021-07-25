import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`

export const Container = styled.div`
  display: flex;
  height: 16px;
  align-items: center;
  justify-content: center;
  animation-name: ${rotate};
  animation-duration: .8s;
  animation-iteration-count: infinite;

  svg {
    font-size: 24px;
    height: 16px;
  }
`
