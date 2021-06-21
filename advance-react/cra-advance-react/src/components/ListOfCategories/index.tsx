import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './style';
import { ICategory } from '../../common/types/shared';

const useCategoriesData = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setCategories(res);
      });
  }, []);

  return { categories, loading };
};

export const ListOfCategories: React.FC = () => {
  const [showFixed, setShowFixed] = useState<boolean>(false);
  const { categories, loading } = useCategoriesData();
  useLayoutEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed != newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed: boolean) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.length > 0 &&
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList(false)}
      {showFixed && renderList(true)}
    </>
  );
};
