import React, { useState, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

import { Message, Container } from './styles';

interface ModalProps {
  title: string;
  message: string;
  swicth: boolean;
  setOpenModal(): void;
}

const Modal: React.FC<ModalProps> = ({
  swicth,
  setOpenModal,
  title,
  message,
}) => {
  const [isOpen, setIsOpen] = useState(swicth);
  useEffect(() => {
    setIsOpen(swicth);
  }, [swicth]);

  const handleCloseModal = useCallback(() => {
    setOpenModal();
  }, [setOpenModal]);

  return (
    <ReactModal
      onRequestClose={handleCloseModal}
      isOpen={isOpen}
      closeTimeoutMS={2000}
      style={{
        content: {
          padding: '32px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#Ffff',
          color: '#212121',
          borderRadius: '0px',
          width: '100%',
          maxWidth: '592px',
          border: 'none',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container>
        <Message>
          <h2>{title}</h2>
          <p>{message}</p>
        </Message>
        <button type="button" onClick={handleCloseModal}>
          <FaTimes />
        </button>
      </Container>
    </ReactModal>
  );
};

export default Modal;
