import React from 'react';
import { INPUT_INFORMATION_PH as input_PH }  from '../common/types';
import '../styles/components/Information.css';

const Information: React.FC = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
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
            Regresar
          </div>
          <div className="Information-next">
            Pagar
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;