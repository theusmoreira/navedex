import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaAngleLeft } from 'react-icons/fa';
import { Container, Title, InputGroup } from './styles';

import Input from '../../components/Input';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

import api from '../../services/api';

interface UpdateNaverFormData {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const UpdateNaver: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem('@Navedex:token');
  const id = localStorage.getItem('@Navedex:naver-id');

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleSubmit = useCallback(
    async (data: UpdateNaverFormData) => {
      await api.put(`navers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      formRef.current?.reset();
      toggleModal();
    },
    [token, toggleModal, id],
  );

  return (
    <Container>
      <Header />
      <Modal
        title="Naver atualizado"
        message="Naver atualizado com sucesso!"
        swicth={modalOpen}
        setOpenModal={toggleModal}
      />
      <Title>
        <Link to="/navers">
          <FaAngleLeft />
        </Link>
        <h2>Editar Naver</h2>
      </Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <span>Nome</span>
          <Input required name="name" placeholder="Nome" type="text" />
        </InputGroup>

        <InputGroup>
          <span>Cargo</span>
          <Input required name="job_role" placeholder="Cargo" type="text" />
        </InputGroup>
        <InputGroup>
          <span>Idade</span>
          <Input required name="birthdate" placeholder="Idade" type="text" />
        </InputGroup>

        <InputGroup>
          <span>Tempo de empresa</span>
          <Input
            required
            name="admission_date"
            placeholder="Tempo de empresa"
            type="text"
          />
        </InputGroup>

        <InputGroup>
          <span>Projetos que participou</span>
          <Input
            required
            name="project"
            placeholder="Projetos que participou"
            type="text"
          />
        </InputGroup>

        <InputGroup>
          <span>URL da foto do Naver</span>
          <Input
            required
            name="url"
            placeholder="URL da foto do Naver"
            type="text"
          />
        </InputGroup>
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
};

export default UpdateNaver;
