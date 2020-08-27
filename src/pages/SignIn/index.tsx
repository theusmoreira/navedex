import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/Auth';
import Input from '../../components/Input';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      await signIn({
        email: data.email,
        password: data.password,
      });
      formRef.current?.reset();
      history.push('/navers');
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Navedex Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <span>E-mail</span>
          <Input name="email" type="text" placeholder="E-mail" />

          <span>Senha</span>
          <Input name="password" type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
