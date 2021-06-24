import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { IPhotoCard } from '../../common/types/shared';
import { graphql, QueryResult } from 'react-apollo';
import { gql } from 'apollo-boost';

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

export const ListOfPhotoCardComponent: React.FC = props => {
  const {
    data: { photos },
  } = props as QueryResult;
  return (
    <ul>
      {(photos as IPhotoCard[]).map(({ id, ...photos }) => (
        <PhotoCard key={id} id={id} {...photos} />
      ))}
    </ul>
  );
};

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent);
