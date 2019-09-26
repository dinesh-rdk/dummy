import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Dashboard from 'modules/Dashboard';
import Login from 'modules/Login';
import Home from 'modules/Home';

export default () => {
  return (
    <Switch>
      <PublicRoute component={Home} path="/" exact />
      <PublicRoute component={Login} path="/login" exact />
      <PrivateRoute component={Dashboard} path="/dashboard" exact />
    </Switch>
  );
};
