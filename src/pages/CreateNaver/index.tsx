import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container, Title, InputGroup } from './styles';

const CreateNaver: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Title>
          <FaAngleLeft />
          <h2>Adicionar Naver</h2>
        </Title>

        <form>
          <InputGroup>
            <span>Nome</span>
            <input placeholder="Nome" type="text" />
          </InputGroup>

          <InputGroup>
            <span>Cargo</span>
            <input placeholder="Cargo" type="text" />
          </InputGroup>
          <InputGroup>
            <span>Idade</span>
            <input placeholder="Idade" type="text" />
          </InputGroup>

          <InputGroup>
            <span>Tempo de empresa</span>
            <input placeholder="Tempo de empresa" type="text" />
          </InputGroup>

          <InputGroup>
            <span>Projetos que participou</span>
            <input placeholder="Projetos que participou" type="text" />
          </InputGroup>

          <InputGroup>
            <span>URL da foto do Naver</span>
            <input placeholder="URL da foto do Naver" type="text" />
          </InputGroup>
          <button type="submit">Salvar</button>
        </form>
      </Container>
    </>
  );
};

export default CreateNaver;
