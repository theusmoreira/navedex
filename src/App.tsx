import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </Router>
  );
};

export default App;
