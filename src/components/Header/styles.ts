import styled from 'styled-components';

export const Container = styled.div`
  background: red;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;

  img {
    width: 145px;
  }

  a {
    text-decoration: none;
    color: #212121;
    font-size: 14px;
  }
`;
