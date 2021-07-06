import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Title } from './styles';

interface ICredentials {
  email: string;
  password: string;
}

interface IUserForm {
  onSubmit: (credentials: ICredentials) => void;
  title: string;
}

export const UserForm: React.FC<IUserForm> = ({ onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const submitData = {
      email: email.value,
      password: password.value,
    };
    onSubmit(submitData);
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Email" type="email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
