import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

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
  padding: 32px;

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
