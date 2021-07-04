import React from 'react';
import { ImgWrapper, Img, Article } from './style';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { IPhotoCard } from '../../common/types/shared';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation';
import { Link } from '@reach/router';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard: React.FC<IPhotoCard> = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();

  const favButtonProps = {
    liked,
    likes,
  };

  return (
    <Article ref={ref}>
      {show ? (
        <>
          <Link to={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Photo" />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike: any) => {
              const handleFavClick = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                setLiked(!liked);
              };
              return <FavButton {...favButtonProps} onClick={handleFavClick} />;
            }}
          </ToggleLikeMutation>
        </>
      ) : null}
    </Article>
  );
};
