import React from 'react';
import { ListOfPhotoCard } from '../containers/ListOfPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';
import { RouteComponentProps } from '@reach/router';

interface IHome {
  path: string;
}

interface IPropsHome extends RouteComponentProps {
  id: string;
}

export const Home: React.FC<IHome> = ({ ...props }) => {
  const { id } = props as IPropsHome;
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} sampleProp />
    </>
  );
};
