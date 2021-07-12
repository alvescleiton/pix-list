import styled, { css } from 'styled-components'

interface Props {
  visible: boolean
}

export const Background = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
  backdrop-filter: blur(6px);
  overflow-x: hidden;
  overflow-y: auto;
  transition: .2s all ease-out;

  ${props => !props.visible && css`
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  `}
`

export const Container = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  background-color: #FFF;
  padding: 10px;
  border-radius: 8px;
  transition: .2s all ease-out;

  ${props => !props.visible && css`
    top: 60%;
  `}
`

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 8px;

  svg {
    font-size: 22px;
    color: #583158;
  }
`
