import React from 'react';
import { PhotoCard } from '../../components/PhotoCard';
import { IPhotoCard } from '../../common/types/shared';
import { gql } from 'apollo-boost';
import { Query, QueryResult } from 'react-apollo';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }: QueryResult) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery: React.FC<{ id: string }> = ({ id }: Partial<IPhotoCard>) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
