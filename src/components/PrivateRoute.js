import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isTokenPresent } from 'utils/localAuth';

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isTokenPresent() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
