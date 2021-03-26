import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { IUseInitialState, Product } from '../common/types';

const Checkout: React.FC = () => {
  const { state, removeFromCart } = useContext(AppContext) as IUseInitialState;
  const { cart } = state;

  const handleRemove = (product: Product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    return cart.reduce((acc, curr) => acc + curr.price,0)
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos</h3>}
        {cart.map((product: Product) => (
          <div className="Checkout-item">
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
          <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;