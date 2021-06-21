import React, { useEffect, useRef, useState } from 'react';
import { ImgWrapper, Img, Button, Article } from './style';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

interface Props {
  id?: string;
  likes?: number;
  src?: string;
}

export const PhotoCard: React.FC<Props> = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    if (ref && ref.current) observer.observe(ref.current);
  }, [ref]);

  return (
    <Article ref={ref}>
      {show ? (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Photo" />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} likes!
          </Button>
        </>
      ) : null}
    </Article>
  );
};
