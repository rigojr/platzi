import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation: React.FC<{ children: any }> = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
};
