import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route render={() => <h1>Hello World!!!</h1>} />
    </Switch>
  );
};
