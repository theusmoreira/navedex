import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Container, TitleHeader, NaversList, NaverItem } from './styles';
import Header from '../../components/Header';

import api from '../../services/api';

interface INavers {
  id: string;
  name: string;
  job_role: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const [navers, setNavers] = useState<INavers[]>([]);
  const token = localStorage.getItem('@Navedex:token');
  useEffect(() => {
    api
      .get('navers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setNavers(response.data);
      });
  }, [token]);
  return (
    <>
      <Header />
      <Container>
        <TitleHeader>
          <h1>Navers</h1>
          <Link to="/create-naver">Adicionar Naver</Link>
        </TitleHeader>
        <NaversList>
          {navers.map(naver => (
            <NaverItem key={naver.id}>
              <img src={naver.url} alt={naver.name} />
              <span>{naver.name}</span>
              <p>{naver.job_role}</p>
              <div>
                <button type="submit">
                  <FaTrash />
                </button>
                <button type="submit">
                  <FaPen />
                </button>
              </div>
            </NaverItem>
          ))}
        </NaversList>
      </Container>
    </>
  );
};

export default Dashboard;
