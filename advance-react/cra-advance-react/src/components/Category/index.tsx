import React from 'react';
import { Link, Image } from './style';
const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

interface Props {
  cover?: string;
  path?: string;
  emoji?: string;
}

export const Category: React.FC<Props> = ({ cover = DEFAULT_IMAGE, path = '/', emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt="category" />
      {emoji}
    </Link>
  );
};
