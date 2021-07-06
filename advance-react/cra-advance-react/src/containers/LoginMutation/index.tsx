import React from 'react';
import { Mutation } from '@apollo/react-components';
import gql from 'graphql-tag';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginMutation = ({ children }: any) => {
  return <Mutation mutation={LOGIN}>{children}</Mutation>;
};
