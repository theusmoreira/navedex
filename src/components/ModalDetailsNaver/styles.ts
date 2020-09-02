import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  img {
    width: 100%;
    grid-column: 1;
    flex: 1;
  }
`;

export const Content = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 0 32px;

  h2 {
    font-size: 24px;
  }

  strong {
    font-size: 16px;
    margin-top: 24px;
  }

  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const ButtonsActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 145px;

  button {
    background: transparent;
    border: none;

    svg {
      color: #212121;
    }
  }
  a {
    margin-left: 8px;
    text-decoration: none;
    color: #212121;
  }
`;

export const ButtonClose = styled.button`
  border: 0;
  background: transparent;
  margin-left: 400px;

  svg {
    color: #212121;
    font-size: 14px;
  }
`;
