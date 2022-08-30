import styled from 'styled-components';

interface PropTypes {
  completed: number;
}

export const Content = styled.div`
  height: 20;
  width: 100%;
  background-color: '#e0e0de';
  border-radius: 50;
  margin: 50;
`;

export const Filler = styled.div<PropTypes>`
  height: 100%;
  width: ${({ completed }) => `${completed}%`};
  background-color: red;
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
`;

export const Label = styled.span`
  padding: 5;
  color: white;
  font-weight: bold;
`;
