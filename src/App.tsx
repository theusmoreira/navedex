import React from 'react';

import GlobalStyles from './styles/global';
// import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      {/* <SignIn /> */}
      <Dashboard />
      <GlobalStyles />
    </>
  );
};

export default App;
