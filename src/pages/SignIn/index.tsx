import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      await signIn({
        emailPost: email,
        password,
      });

      history.push('/navers');
    },
    [email, password, signIn, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Navedex Logo" />
        <form onSubmit={handleSubmit}>
          <span>E-mail</span>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <span>Senha</span>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
