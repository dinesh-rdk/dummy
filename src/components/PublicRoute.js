import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isTokenPresent } from 'utils/localAuth';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isTokenPresent() ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);
