import React, { useState, useEffect, useCallback } from 'react';
import { FaPen, FaTrash, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import ModalDeleteNaver from '../ModalDeleteNaver';
import { Container, Content, ButtonsActions, ButtonClose } from './styles';

import { useNaver } from '../../hooks/Navers';

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

  const { showNaver } = useNaver();
  const [modalOpenDelete, setModalOpenDelete] = useState(false);

  const naverId = localStorage.getItem('@Navedex:naver-id');

  useEffect(() => {
    async function loadNaver(): Promise<void> {
      if (naverId) {
        const naverShow = await showNaver(naverId);
        setNaver(naverShow);
      }
    }
    loadNaver();
  }, [naverId, showNaver]);

  const toggleModalDelete = useCallback(() => {
    setModalOpenDelete(!modalOpenDelete);
  }, [modalOpenDelete]);

  const handleOpenDeleteModal = useCallback(() => {
    toggleModalDelete();
  }, [toggleModalDelete]);

  return (
    <Modal
      setOpenModal={setOpenModal}
      swicth={swicth}
      stylesCustomizable={{ padding: '0', width: '1006px' }}
    >
      <ModalDeleteNaver
        swicth={modalOpenDelete}
        setOpenModal={toggleModalDelete}
      />
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
            <button onClick={() => handleOpenDeleteModal()} type="button">
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
