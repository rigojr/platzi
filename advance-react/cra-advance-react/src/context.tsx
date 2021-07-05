import React, { createContext, useState } from 'react';

const Context = createContext({
  isAuth: false,
  activeAuth: () => {
    null;
  },
});

const Provider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = {
    isAuth,
    activeAuth: () => {
      setIsAuth(true);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Consumer: Context.Consumer, Provider, Context };
