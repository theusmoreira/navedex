import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  button {
    border: 0;
    background: transparent;

    svg {
      color: #212121;
      font-size: 14px;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: #212121;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    color: #212121;
  }
`;
