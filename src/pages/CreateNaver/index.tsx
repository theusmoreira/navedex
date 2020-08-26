import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaAngleLeft } from 'react-icons/fa';
import Input from '../../components/Input';
import Header from '../../components/Header';
import { Container, Title, InputGroup } from './styles';

import api from '../../services/api';

interface CreateNaverFormData {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const CreateNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const token = localStorage.getItem('@Navedex:token');

  const handleSubmit = useCallback(
    async (data: CreateNaverFormData) => {
      await api.post('navers', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/navers');
    },
    [history, token],
  );
  return (
    <>
      <Container>
        <Header />
        <Title>
          <Link to="/navers">
            <FaAngleLeft />
          </Link>
          <h2>Adicionar Naver</h2>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputGroup>
            <span>Nome</span>
            <Input name="name" placeholder="Nome" type="text" />
          </InputGroup>

          <InputGroup>
            <span>Cargo</span>
            <Input name="job_role" placeholder="Cargo" type="text" />
          </InputGroup>
          <InputGroup>
            <span>Idade</span>
            <Input name="birthdate" placeholder="Idade" type="text" />
          </InputGroup>

          <InputGroup>
            <span>Tempo de empresa</span>
            <Input
              name="admission_date"
              placeholder="Tempo de empresa"
              type="text"
            />
          </InputGroup>

          <InputGroup>
            <span>Projetos que participou</span>
            <Input
              name="project"
              placeholder="Projetos que participou"
              type="text"
            />
          </InputGroup>

          <InputGroup>
            <span>URL da foto do Naver</span>
            <Input name="url" placeholder="URL da foto do Naver" type="text" />
          </InputGroup>
          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </>
  );
};

export default CreateNaver;
