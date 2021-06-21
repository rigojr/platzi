import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCard: React.FC = () => {
  return (
    <ul>
      {[1, 2, 3, 4].map(photo => (
        <PhotoCard key={photo} />
      ))}
    </ul>
  );
};
