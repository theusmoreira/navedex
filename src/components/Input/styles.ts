import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 40px;
  width: 100%;
  padding: 8px;
  border: 1px solid #424242;
  margin-top: 4px;
  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #a0a0a0;
      border-color: #a0a0a0;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      font-size: 16px;
      color: #9e9e9e;
    }
  }
`;
