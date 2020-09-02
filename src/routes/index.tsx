import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import CreateNaver from '../pages/CreateNaver';
import UpdateNaver from '../pages/UpdateNaver';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route isPrivate path="/navers" component={Dashboard} />
      <Route isPrivate path="/create-naver" component={CreateNaver} />
      <Route isPrivate path="/update-naver" component={UpdateNaver} />
    </Switch>
  );
};

export default Routes;
