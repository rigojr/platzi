import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { IPhotoCard } from '../../common/types/shared';
import { ChildProps } from '../../hoc/withPhotos';

export const ListOfPhotoCardComponent: React.FC<ChildProps> = ({ data: { loading, photos, error }, sampleProp }) => {
  console.log(sampleProp);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <ul>
      {(photos as IPhotoCard[]).map(({ id, ...photos }) => (
        <PhotoCard key={id} id={id} {...photos} />
      ))}
    </ul>
  );
};
