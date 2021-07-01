import { graphql, ChildDataProps } from 'react-apollo';
import { gql } from 'apollo-boost';
import { IPhotoCard } from '../common/types/shared';

export const LIST_OF_PHOTOS_QUERY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

type Response = {
  photos: IPhotoCard[];
};

type Variables = {
  categoryId: string;
};

export interface InputProps extends Variables {
  sampleProp?: boolean;
}

export type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withPhotos = graphql<InputProps, Response, Variables, ChildProps>(LIST_OF_PHOTOS_QUERY);
