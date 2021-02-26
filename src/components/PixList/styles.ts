import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Items = styled.ul`
  margin: 0;
  padding: 10px;
  box-shadow: 0px 0px 4px 0px #ccc;
  border-radius: 8px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;

  & + li {
    border-top: 1px solid #f3f3f3;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
`;

export const NameDescription = styled.span`
  color: #AAA;
  font-size: 12px;
  margin-left: 10px;
  text-transform: initial;
`

export const Icon = styled.div`
  svg {
    color: ${props => props.theme.colors.primary_dark};
    opacity: 0.7;
    font-size: 12px;
  }
`;
