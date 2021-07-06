import React, { createContext, useState } from 'react';

const Context = createContext({
  isAuth: false,
  activeAuth: (token: string) => {
    null;
  },
});

const Provider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token') !== null;
  });
  const value = {
    isAuth,
    activeAuth: (token: string) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Consumer: Context.Consumer, Provider, Context };
