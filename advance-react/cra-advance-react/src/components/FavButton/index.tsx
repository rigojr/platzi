import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

interface IFavButton {
  liked: boolean;
  likes: number;
  onClick: () => void;
}

export const FavButton: React.FC<IFavButton> = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes} likes!
    </Button>
  );
};
