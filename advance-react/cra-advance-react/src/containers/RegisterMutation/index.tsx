import React from 'react';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = ({ children }: any) => {
  return <Mutation mutation={REGISTER}>{children}</Mutation>;
};
