import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Container, TitleHeader, NaversList, NaverItem } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleHeader>
          <h1>Navers</h1>
          <button type="submit">Adicionar Naver</button>
        </TitleHeader>
        <NaversList>
          <NaverItem>
            <img
              src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
              alt="Matheus Santos"
            />
            <span>Matheus Santos</span>
            <p>Front-end Developer</p>
            <div>
              <button type="submit">
                <FaTrash />
              </button>
              <button type="submit">
                <FaPen />
              </button>
            </div>
          </NaverItem>

          <NaverItem>
            <img
              src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
              alt="Matheus Santos"
            />
            <span>Matheus Santos</span>
            <p>Front-end Developer</p>
            <div>
              <button type="submit">
                <FaTrash />
              </button>
              <button type="submit">
                <FaPen />
              </button>
            </div>
          </NaverItem>

          <NaverItem>
            <img
              src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
              alt="Matheus Santos"
            />
            <span>Matheus Santos</span>
            <p>Front-end Developer</p>
            <div>
              <button type="submit">
                <FaTrash />
              </button>
              <button type="submit">
                <FaPen />
              </button>
            </div>
          </NaverItem>

          <NaverItem>
            <img
              src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
              alt="Matheus Santos"
            />
            <span>Matheus Santos</span>
            <p>Front-end Developer</p>
            <div>
              <button type="submit">
                <FaTrash />
              </button>
              <button type="submit">
                <FaPen />
              </button>
            </div>
          </NaverItem>

          <NaverItem>
            <img
              src="https://avatars0.githubusercontent.com/u/52337444?s=460&u=98daaab916965e0330ef6552c0e879eb75e51bb1&v=4"
              alt="Matheus Santos"
            />
            <span>Matheus Santos</span>
            <p>Front-end Developer</p>
            <div>
              <button type="submit">
                <FaTrash />
              </button>
              <button type="submit">
                <FaPen />
              </button>
            </div>
          </NaverItem>
        </NaversList>
      </Container>
    </>
  );
};

export default Dashboard;
