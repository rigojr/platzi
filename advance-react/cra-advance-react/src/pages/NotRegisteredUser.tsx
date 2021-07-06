import React from 'react';
import Context from '../context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
interface IPropsNotRegisteredUser {
  path: string;
}

export const NotRegisteredUser: React.FC<IPropsNotRegisteredUser> = () => {
  return (
    <Context.Consumer>
      {({ activeAuth }) => {
        return (
          <>
            <RegisterMutation>
              {(register: any) => {
                console.log(register);
                const onSubmit = ({ email, password }: any) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables });
                };

                return <UserForm onSubmit={onSubmit} title="Registrate" />;
              }}
            </RegisterMutation>
            <UserForm onSubmit={activeAuth} title="Iniciar Sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
