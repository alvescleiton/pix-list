import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 10px;
  left: 20px;
  right: 20px;
  z-index: 51;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: calc(100% - 40px);
  box-shadow: 0px 0px 2px 0px ${props => props.theme.colors.primary};
  background: rgba(255,255,255, 0.93);
  border-radius: 8px;

  .fa-search {
    flex: 0 0 auto;
    margin-right: 20px;
    color: ${props => props.theme.colors.primary};
  }
`

export const Input = styled.input`
  flex: 1 1 auto;
  font-size: 18px;
  line-height: 40px;
  border: 0;
  color: ${props => props.theme.colors.primary};
  background: transparent;
  outline: none;
`
