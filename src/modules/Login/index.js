import React from 'react';
import { setToken } from 'utils/localAuth';

export default props => {
  const handleLogin = () => {
    setToken('dummy');
    props.history.push('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => handleLogin()}>Click here to log in</button>
    </div>
  );
};
