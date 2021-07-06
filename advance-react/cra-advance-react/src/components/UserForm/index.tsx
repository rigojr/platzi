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
  error?: string;
  disabled?: boolean;
}

export const UserForm: React.FC<IUserForm> = ({ disabled = false, error, onSubmit, title }) => {
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
        <Input disabled={disabled} placeholder="Email" type="email" {...email} />
        <Input disabled={disabled} placeholder="Password" type="password" {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <span>{error}</span>}
    </>
  );
};
