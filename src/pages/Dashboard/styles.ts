import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
`;

export const TitleHeader = styled.div`
  display: flex;
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 40px;
  }

  button {
    width: 180px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #212121;
    border: none;
  }
`;

export const NaversList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  padding: 32px 0 32px 32px;
  grid-gap: 32px;
`;

export const NaverItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 280px;
    height: 280px;
  }

  span {
    margin-top: 16px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
      background: transparent;
      border: none;

      & + button {
        margin-left: 8px;
      }

      svg {
        color: #212121;
      }
    }
  }
`;
