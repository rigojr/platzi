import { useRef, useState, useEffect, RefObject } from 'react';

export const useNearScreen = (): [boolean, RefObject<HTMLDivElement>] => {
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

  return [show, ref];
};
