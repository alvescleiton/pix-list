import styled from 'styled-components';

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
  padding: 15px;

  & + li {
    border-top: 1px solid #f3f3f3;
  }
`;

export const Name = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  color: #333;
`;

export const Icon = styled.div`
  svg {
    color: #AAA;
  }
`;
