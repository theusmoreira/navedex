import React, { useState, useCallback } from 'react';
import Modal from '../Modal';
import { Container, Content } from './styles';

import api from '../../services/api';

interface NaverDetailData {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const ModalDetailsNaver: React.FC<NaverDetailData> = data => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <Modal
      setOpenModal={toggleModal}
      swicth
      stylesCustomizable={{ padding: '0', width: '1006px' }}
    >
      <Container>
        <img src={data.url} alt={data.name} />
        <Content>
          <h2>{data.name}</h2>
          <p>{data.job_role}</p>

          <strong>Idade</strong>
          <p>{data.birthdate}</p>

          <strong>Tempo de empresa</strong>
          <p>{data.admission_date}</p>

          <strong>Projetos que participou</strong>
          <p>{data.project}</p>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalDetailsNaver;
