import React, { useCallback } from 'react';
import Modal from '../Modal';

import { Container, Message, ButtonsActions } from './styles';
import api from '../../services/api';

interface Naver {
  id: string;
  name: string;
  job_role: string;
  url: string;
}

interface ModalProps {
  data: Naver[];
  setNaversInModal(value: React.SetStateAction<Naver[]>): void;
  swicth: boolean;
  setOpenModal(): void;
}
const ModalDeleteNaver: React.FC<ModalProps> = ({
  setOpenModal,
  swicth,
  data,
  setNaversInModal,
}) => {
  const id = localStorage.getItem('@Navedex:naver-id');
  const token = localStorage.getItem('@Navedex:token');

  const handleDeleteNaver = useCallback(() => {
    api.delete(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setNaversInModal(data.filter(naver => naver.id !== id));
    setOpenModal();
  }, [id, token, setOpenModal, data, setNaversInModal]);

  return (
    <Modal setOpenModal={setOpenModal} swicth={swicth}>
      <Container>
        <Message>
          <h2>Excluir Naver</h2>
          <p>Tem certeza que deseja excluir esse Naver?</p>
        </Message>
        <ButtonsActions>
          <button onClick={setOpenModal} type="button">
            Cancelar
          </button>
          <button onClick={handleDeleteNaver} type="button">
            Excluir
          </button>
        </ButtonsActions>
      </Container>
    </Modal>
  );
};

export default ModalDeleteNaver;
