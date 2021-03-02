import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
`

export const ButtonPlus = styled.div`
  position: fixed;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #FFF;
  font-size: 40px;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.colors.second};
  box-shadow: 3px 3px 2px #ddd,
              inset -3px -3px 2px ${props => props.theme.colors.second_dark},
              inset 3px 3px 2px ${props => props.theme.colors.second_light};
`
