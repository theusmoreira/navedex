import styled from 'styled-components';
import { shade } from 'polished';

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

  a {
    text-align: center;
    text-decoration: none;
    width: 180px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #212121;
    border: none;

    &:hover {
      background: ${shade(0.2, '#212121')};
    }
  }
`;

export const NaversList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  padding: 32px;
  grid-gap: 32px;
`;

export const NaverItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  button {
    border: 0;

    img {
      width: 280px;
      height: 280px;
    }
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

      svg {
        color: #212121;
      }
    }

    a {
      margin-left: 8px;
      text-decoration: none;
      color: #212121;

      svg {
        color: #212121;
      }
    }
  }
`;
