import React from 'react';

import { AuthProvider } from './Auth';
import { NaversProvider } from './Navers';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <NaversProvider>{children}</NaversProvider>
    </AuthProvider>
  );
};

export default AppProvider;
