import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { IUseInitialState, Product } from '../common/types';
import { handleSumTotal } from '../utils/util';

const Checkout: React.FC = () => {
  const { state, removeFromCart } = useContext(AppContext) as IUseInitialState;
  const { cart } = state;

  const handleRemove = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos</h3>}
        {cart.map((product: Product, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(product)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;