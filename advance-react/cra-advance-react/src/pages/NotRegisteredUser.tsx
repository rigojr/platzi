import React from 'react';
import Context from '../context';

interface IPropsNotRegisteredUser {
  path: string;
}

export const NotRegisteredUser: React.FC<IPropsNotRegisteredUser> = () => {
  return (
    <Context.Consumer>
      {({ activeAuth }) => {
        return (
          <form onSubmit={activeAuth}>
            <button>Iniciar</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
};
