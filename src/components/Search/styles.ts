import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 10px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: calc(100% - 40px);
  box-shadow: 0px 0px 4px 0px #ccc;
  background: rgba(255,255,255, 0.7);
  border-radius: 8px;

  .fa-search {
    flex: 0 0 auto;
    margin-right: 20px;
  }
`

export const Input = styled.input`
  flex: 1 1 auto;
  font-size: 18px;
  line-height: 34px;
  border: 0;
  outline: none;
`
