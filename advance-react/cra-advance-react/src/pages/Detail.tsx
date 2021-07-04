import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
import { RouteComponentProps } from '@reach/router';

interface IPropsDetail extends RouteComponentProps {
  path: string;
  detailId?: string;
}

export const Detail: React.FC<IPropsDetail> = ({ detailId = '1' }) => {
  console.log(detailId);
  return <PhotoCardWithQuery id={detailId} />;
};
