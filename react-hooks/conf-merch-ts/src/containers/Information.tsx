import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { INPUT_INFORMATION_PH as input_PH }  from '../common/types';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';
import { IUseInitialState, Product } from '../common/types';

const Information: React.FC = () => {
  const { state, addToBuyer } = useContext(AppContext) as IUseInitialState;
  const form = useRef(null);
  const { cart } = state;
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current || undefined);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder={input_PH.NAME} name="name" />
            <input type="text" placeholder={input_PH.EMAIL} name="email" />
            <input type="text" placeholder={input_PH.ADDRESS} name="address" />
            <input type="text" placeholder={input_PH.APT} name="apto" />
            <input type="text" placeholder={input_PH.CITY} name="city" />
            <input type="text" placeholder={input_PH.COUNTRY} name="country" />
            <input type="text" placeholder={input_PH.STATE} name="state" />
            <input type="text" placeholder={input_PH.POSTAL_CODE} name="cp" />
            <input type="text" placeholder={input_PH.PHONE} name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={() => handleSubmit()}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos:</h3>
        {cart.map((product: Product) => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;