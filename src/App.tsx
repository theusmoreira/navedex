import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './hooks/Auth';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </Router>
  );
};

export default App;
