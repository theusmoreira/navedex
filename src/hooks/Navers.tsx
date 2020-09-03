import React, { createContext, useState, useCallback, useContext } from 'react';

import formatedDate from '../utils/formatedDate';
import api from '../services/api';

interface Navers {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
  id: string;
}

interface NaversContextData {
  navers: Navers[];
  getNavers(): Promise<void>;
  showNaver(id: string): Promise<Navers>;
  addNaver(data: Navers): Promise<void>;
  editNaver(data: Navers, id: string): Promise<void>;
  deleteNaver(id: string): Promise<void>;
}

const NaversContext = createContext<NaversContextData>({} as NaversContextData);

const NaversProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<Navers[]>([]);

  const token = localStorage.getItem('@Navedex:token');

  const getNavers = useCallback(async () => {
    const response = await api.get('navers', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setNavers(response.data);
  }, [token]);

  const showNaver = useCallback(
    async (naverId: string) => {
      const response = await api.get<Navers>(`navers/${naverId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const {
        admission_date,
        job_role,
        name,
        birthdate,
        url,
        project,
        id,
      } = response.data;
      return {
        admission_date: formatedDate(admission_date),
        birthdate: formatedDate(birthdate),
        project,
        job_role,
        name,
        url,
        id,
      };
    },
    [token],
  );

  const addNaver = useCallback(
    async (data: Navers) => {
      await api.post('navers', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [token],
  );

  const editNaver = useCallback(
    async (data: Navers, id) => {
      await api.put(`navers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [token],
  );

  const deleteNaver = useCallback(
    async (id: string) => {
      await api.delete(`navers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNavers(navers.filter(naver => naver.id !== id));
      localStorage.removeItem('@Navedex:naver-id');
    },
    [token, navers],
  );

  return (
    <NaversContext.Provider
      value={{
        navers,
        getNavers,
        addNaver,
        deleteNaver,
        editNaver,
        showNaver,
      }}
    >
      {children}
    </NaversContext.Provider>
  );
};

function useNaver(): NaversContextData {
  const context = useContext(NaversContext);

  if (!context) {
    throw new Error('useNaver must be within an AuthProvider');
  }

  return context;
}

export { NaversProvider, useNaver };
