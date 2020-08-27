import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  form {
    padding: 0 354px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;

    button {
      margin-left: 135px;
      height: 40px;
      padding: 8px;
      background: #212121;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border: 1px solid #424242;
      width: 175px;
      grid-column: 2;

      &:hover {
        background: ${shade(0.2, '#212121')};
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 354px;

  h2 {
    font-weight: 600;
    font-size: 24px;
    color: #212121;
    margin-left: 10px;
  }

  a {
    display: flex;
    align-items: center;
    svg {
      font-size: 24px;
      color: #212121;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
