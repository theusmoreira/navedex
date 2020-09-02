import React, { useCallback } from 'react';
import Modal from '../Modal';

import { Container, Message, ButtonsActions } from './styles';
import api from '../../services/api';

interface ModalProps {
  swicth: boolean;
  setOpenModal(): void;
}
const ModalDeleteNaver: React.FC<ModalProps> = ({ setOpenModal, swicth }) => {
  const id = localStorage.getItem('@Navedex:naver-id');
  const token = localStorage.getItem('@Navedex:token');

  const handleDeleteNaver = useCallback(() => {
    api.put(`navers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal();
  }, [id, token]);

  return (
    <Modal setOpenModal={setOpenModal} swicth={swicth}>
      <Container>
        <Message>
          <h2>Excluir Naver</h2>
          <p>Tem certeza que deseja excluir esse Naver?</p>
        </Message>
        <ButtonsActions>
          <button type="button">Cancelar</button>
          <button onClick={handleDeleteNaver} type="button">
            Excluir
          </button>
        </ButtonsActions>
      </Container>
    </Modal>
  );
};

export default ModalDeleteNaver;
