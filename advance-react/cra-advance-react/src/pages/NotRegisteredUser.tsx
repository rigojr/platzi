import React from 'react';
import Context from '../context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';
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
              {(register: any, { loading, error }: any) => {
                const onSubmit = ({ email, password }: any) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables })
                    .then(({ data }: any) => {
                      const { signup } = data;
                      activeAuth(signup);
                    })
                    .catch(() => null);
                };
                const errorMsg = error && 'error';
                return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrate" />;
              }}
            </RegisterMutation>
            <LoginMutation>
              {(login: any, { error, loading }: any) => {
                const onSubmit = ({ email, password }: any) => {
                  const input = { email, password };
                  const variables = { input };
                  login({ variables })
                    .then(({ data }: any) => {
                      const { login } = data;
                      activeAuth(login);
                    })
                    .catch(() => null);
                };
                const errorMsg = error && 'error';
                return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Iniciar Sesión" />;
              }}
            </LoginMutation>
          </>
        );
      }}
    </Context.Consumer>
  );
};
