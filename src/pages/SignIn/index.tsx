import React from 'react';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Navedex Logo" />
        <form>
          <span>E-mail</span>
          <input type="text" placeholder="E-mail" />

          <span>Senha</span>
          <input type="text" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
