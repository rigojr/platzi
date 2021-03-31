import React, { useContext } from 'react';
import { Product as IProduct, IUseInitialState } from '../common/types';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css'

const Products: React.FC = () => {
  const { state, addToCart } = useContext(AppContext) as IUseInitialState;
  const { products } = state;

  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product: IProduct) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}

export default Products;