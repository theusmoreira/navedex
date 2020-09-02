import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: flex-start; */
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

export const ButtonsActions = styled.div`
  display: flex;
  margin-top: 32px;

  button {
    border: 1px solid #212121;
    background: transparent;
    width: 176px;
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #212121;
    margin-left: 200px;

    & + button {
      margin-left: 24px;
      background: #212121;
      color: #fff;
    }
  }
`;
