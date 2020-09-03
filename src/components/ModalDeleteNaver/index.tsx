import React, { useCallback, useState } from 'react';
import Modal from '../Modal';

import { Container, Message, ButtonsActions } from './styles';
import { useNaver } from '../../hooks/Navers';

interface Naver {
  id: string;
  name: string;
  job_role: string;
  url: string;
}

interface ModalProps {
  swicth: boolean;
  setOpenModal(): void;
}
const ModalDeleteNaver: React.FC<ModalProps> = ({ setOpenModal, swicth }) => {
  const [modalOpenMessage, setModalOpenMessage] = useState(false);
  const { deleteNaver } = useNaver();
  const id = localStorage.getItem('@Navedex:naver-id');

  const toggleModalMessage = useCallback(() => {
    setModalOpenMessage(!modalOpenMessage);
  }, [modalOpenMessage]);

  const handleOpenMessageModal = useCallback(() => {
    toggleModalMessage();
  }, [toggleModalMessage]);

  const handleDeleteNaver = useCallback(() => {
    if (id) {
      deleteNaver(id);
      setOpenModal();
      handleOpenMessageModal();
    }
  }, [id, deleteNaver, setOpenModal, handleOpenMessageModal]);

  return (
    <Modal setOpenModal={setOpenModal} swicth={swicth}>
      <Modal
        swicth={modalOpenMessage}
        setOpenModal={toggleModalMessage}
        title="Naver excluído"
        message="Naver excluído com sucesso!"
      />
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
