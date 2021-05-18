import React from 'react';
import RawProducts from '../../source/productList.json';
import { Link } from 'react-router-dom';

import './products.css';

const Products: React.FC = () => {
  return (
    <div className="products-list">
      {RawProducts.map((product) => {
        const {
          ThumbnailURL,
          Name,
          Price,
          "Retail Price": retailPrice,
        } = product;
        return (
          <div className="product-card" key={Name}>
            <div className="product-card__img">
              <img src={ThumbnailURL} alt={Name} />
            </div>
            <div className="product-card__details">
              <p>{Name}</p>
              <p>
                {Price}
                {Price !== retailPrice
                  && <span>{retailPrice}</span>}
              </p>
            </div>
            <div className="product-card__btns">
              <Link to="/details">View Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;