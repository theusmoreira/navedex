import React from 'react';

import { HeaderContent } from './styles';
import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContent>
      <img src={logoImg} alt="Navedex Logo" />
      <a href="/">
        <span>Sair</span>
      </a>
    </HeaderContent>
  );
};

export default Header;
