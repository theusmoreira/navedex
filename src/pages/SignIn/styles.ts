import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  flex-direction: column;
  border: 1px solid #212121;
  padding: 40px 32px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    span {
      font-size: 14px;
      font-weight: 600;
    }

    input {
      width: 100%;
      height: 40px;
      padding: 8px;
      border: 1px solid #424242;
      margin-bottom: 32px;

      &::placeholder {
        font-size: 16px;
        color: #9e9e9e;
      }
    }

    button {
      width: 100%;
      height: 40px;
      padding: 8px;
      background: #212121;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid #424242;
    }
  }
`;
