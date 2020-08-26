import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/Auth';
import { HeaderContent } from './styles';
import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <HeaderContent>
      <img src={logoImg} alt="Navedex Logo" />
      <Link onClick={signOut} to="/">
        <span>Sair</span>
      </Link>
    </HeaderContent>
  );
};

export default Header;
