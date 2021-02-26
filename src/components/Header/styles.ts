import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  position: relative;
  z-index: 50;
  margin-bottom: 30px;
  ${props => props && css`
    background: linear-gradient(to bottom, ${props.theme.colors.primary} 50%, ${darken(0.05, props.theme.colors.primary)});
  `}
  border-radius: 0% 0% 15% 15%;
  box-shadow: 0 0 3px #FFF,
              0 0 25px ${props => props.theme.colors.primary},
              0 0 5px ${props => props.theme.colors.primary};
`

export const Title = styled.h1`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 60px;
  color: rgba(255,255,255, 0.9);
`
