import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './style';
import { categories as mockCategories } from '../../assets/db.json';
import { ICategory } from '../../common/types/shared';

export const ListOfCategories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(res => setCategories(res));
  }, []);

  return (
    <List>
      {categories.length > 0 &&
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
    </List>
  );
};
