import React from 'react';
import { Anchor, Image } from './style';
const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg';

interface Props {
  cover?: string;
  path?: string;
  emoji?: string;
}

export const Category: React.FC<Props> = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt="category" />
      {emoji}
    </Anchor>
  );
};
