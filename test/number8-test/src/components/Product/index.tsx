import React from 'react';
import Products from '../../source/productList.json';
import swal from 'sweetalert';

import './product.css';

const Product: React.FC = () => {
  const testProudct = Products[2]; // FOR TESTING

  const {
    ThumbnailURL,
    Name,
    Price,
    "Retail Price": retailPrice,
    Description,
    Stock,
    Brand,
    Color,
    RatingAvg,
  } = testProudct;

  /**
   * 
   */
  const handleAddCart = () => {
    swal(`Product ${Name} Added successfully `, "", "success");
    setTimeout(() => {
      if (swal.close)
        swal.close();
    }, 3000);
  }
  let stars = [];
  let zero = [];
  if (RatingAvg) {
    stars = [...Array(Math.floor(RatingAvg))].fill('*')
    if (RatingAvg < 5)
      zero = [...Array(Math.floor(5 - RatingAvg))].fill('0')
  }
  return (
    <div className="product-container">
      <div className="product-main-details">
        <div className="product-img">
          <img src={ThumbnailURL} alt={Name} />
          <div className="product-img__img-links">
            <a>Clerance</a>
            <a>Free Shipping</a>
          </div>
        </div>
        <div className="product-details">
          <p className="product-details__title">{Name}</p>
          <p>
            {stars.map(e => e)}
            {zero.map(e => e)}
          </p>
          <p className="product-details__description">{Description}</p>
        </div>
        <div className="product-info">
          <p className="product-info__price">
            {Price}
            {Price !== retailPrice
              && <span>{retailPrice}</span>}
          </p>
          <p>{Stock ? `In stock: ${Stock}` : 'Out of Stock' }</p>
          <a onClick={handleAddCart}>Add to Cart</a>
        </div>
      </div>
      <p><b>Brand:</b> {Brand}</p>
      <p><b>Color:</b> {Color}</p>
    </div>
  );
}

export default Product;