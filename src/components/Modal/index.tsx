import React, { useState, useEffect, useCallback } from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

import { Message, Container } from './styles';

interface StylesProps {
  width?: string;
  padding?: string;
}

interface ModalProps {
  title?: string;
  message?: string;
  stylesCustomizable?: StylesProps;
  swicth: boolean;
  setOpenModal(): void;
}

const Modal: React.FC<ModalProps> = ({
  swicth,
  setOpenModal,
  stylesCustomizable,
  title,
  message,
  children,
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
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      isOpen={isOpen}
      closeTimeoutMS={500}
      style={{
        content: {
          padding: !stylesCustomizable?.padding
            ? '32px'
            : stylesCustomizable.padding,
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
          maxWidth: !stylesCustomizable?.width
            ? '592px'
            : stylesCustomizable.width,
          border: 'none',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {title && message ? (
        <Container>
          <Message>
            <h2>{title}</h2>
            <p>{message}</p>
          </Message>
          <button type="button" onClick={handleCloseModal}>
            <FaTimes />
          </button>
        </Container>
      ) : (
        children
      )}
    </ReactModal>
  );
};

export default Modal;
