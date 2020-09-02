import React, { useState, useEffect } from 'react';
import { FaPen, FaTrash, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import { Container, Content, ButtonsActions, ButtonClose } from './styles';

import api from '../../services/api';
import formatedDate from '../../utils/formatedDate';

interface NaverDetailData {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

interface ModalDetailProps {
  swicth: boolean;
  setOpenModal(): void;
}

const ModalDetailsNaver: React.FC<ModalDetailProps> = ({
  setOpenModal,
  swicth,
}) => {
  const [naver, setNaver] = useState<NaverDetailData>({} as NaverDetailData);
  const token = localStorage.getItem('@Navedex:token');

  const naverId = localStorage.getItem('@Navedex:naver-id');

  useEffect(() => {
    async function loadNaver(): Promise<void> {
      const response = await api.get<NaverDetailData>(`navers/${naverId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNaver({
        ...response.data,
        admission_date: formatedDate(response.data.admission_date),
        birthdate: formatedDate(response.data.birthdate),
      });
    }
    loadNaver();
  }, [token, naverId]);

  return (
    <Modal
      setOpenModal={setOpenModal}
      swicth={swicth}
      stylesCustomizable={{ padding: '0', width: '1006px' }}
    >
      <Container>
        <img src={naver.url} alt={naver.name} />
        <Content>
          <ButtonClose type="button" onClick={setOpenModal}>
            <FaTimes />
          </ButtonClose>
          <h2>{naver.name}</h2>
          <p>{naver.job_role}</p>

          <strong>Idade</strong>
          <p>{naver.birthdate}</p>

          <strong>Tempo de empresa</strong>
          <p>{naver.admission_date}</p>

          <strong>Projetos que participou</strong>
          <p>{naver.project}</p>
          <ButtonsActions>
            <button onClick={() => {}} type="button">
              <FaTrash />
            </button>
            <Link to="/update-naver">
              <FaPen />
            </Link>
          </ButtonsActions>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalDetailsNaver;
