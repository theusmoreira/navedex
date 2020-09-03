import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Container, TitleHeader, NaversList, NaverItem } from './styles';

import Header from '../../components/Header';
import ModalDetailsNaver from '../../components/ModalDetailsNaver';
import ModalDeleteNaver from '../../components/ModalDeleteNaver';

import { useNaver } from '../../hooks/Navers';

interface Naver {
  id: string;
  name: string;
  job_role: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const { navers, getNavers } = useNaver();

  const [modalOpenDetail, setModalOpenDetail] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);

  useEffect(() => {
    getNavers();
  }, [getNavers]);

  const toggleModalDetail = useCallback(() => {
    setModalOpenDetail(!modalOpenDetail);
  }, [modalOpenDetail]);

  const toggleModalDelete = useCallback(() => {
    setModalOpenDelete(!modalOpenDelete);
  }, [modalOpenDelete]);

  const handleOpenDeleteModal = useCallback(
    (id: string) => {
      localStorage.setItem('@Navedex:naver-id', id);
      toggleModalDelete();
    },
    [toggleModalDelete],
  );

  const handleGetNaverDetail = useCallback(
    (id: string) => {
      localStorage.setItem('@Navedex:naver-id', id);
      toggleModalDetail();
    },
    [toggleModalDetail],
  );

  const handleGetNaverId = useCallback((id: string) => {
    localStorage.setItem('@Navedex:naver-id', id);
  }, []);

  return (
    <>
      <Header />
      <ModalDetailsNaver
        swicth={modalOpenDetail}
        setOpenModal={toggleModalDetail}
      />
      <ModalDeleteNaver
        swicth={modalOpenDelete}
        setOpenModal={toggleModalDelete}
      />
      <Container>
        <TitleHeader>
          <h1>Navers</h1>
          <Link to="/create-naver">Adicionar Naver</Link>
        </TitleHeader>
        <NaversList>
          {navers.map(naver => (
            <NaverItem key={naver.id}>
              <button
                onClick={() => handleGetNaverDetail(naver.id)}
                type="button"
              >
                <img src={naver.url} alt={naver.name} />
              </button>
              <span>{naver.name}</span>
              <p>{naver.job_role}</p>
              <div>
                <button
                  onClick={() => handleOpenDeleteModal(naver.id)}
                  type="button"
                >
                  <FaTrash />
                </button>
                <Link to="/update-naver">
                  <button
                    onClick={() => handleGetNaverId(naver.id)}
                    type="button"
                  >
                    <FaPen />
                  </button>
                </Link>
              </div>
            </NaverItem>
          ))}
        </NaversList>
      </Container>
    </>
  );
};

export default Dashboard;
