import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface SignInCredentials {
  emailPost: string;
  password: string;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Navedex:token');
    const user = localStorage.getItem('@Navedex:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ emailPost, password }) => {
    const response = await api.post('users/login', {
      email: emailPost,
      password,
    });

    const { token, email, id } = response.data;

    localStorage.setItem('@Navedex:token', token);
    localStorage.setItem(
      '@Navedex:user',
      JSON.stringify({ user: { email, id } }),
    );

    setData({ token, user: { email, id } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Navedex:token');
    localStorage.removeItem('@Navedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
