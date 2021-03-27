import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  PayPalButton, 
  PaypalOptions, 
  ButtonStylingOptions, 
  OnCaptureData 
} from 'react-paypal-button';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import { IUseInitialState, Product, Order } from '../common/types';
import { handleSumTotal } from '../utils/util';

const Payment: React.FC = () => {
  const { state, addNewOrder } = useContext(AppContext) as IUseInitialState;
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: process.env.REACT_APP_PAYPAL_TOKEN_ID,
    intent: 'capture',
    currency: 'USD',
  } as PaypalOptions;

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  } as ButtonStylingOptions;

  const handlePaymentSuccess = (data: OnCaptureData) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder: Order = {
        buyer: buyer,
        product: cart,
        payment: data
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((product: Product, key) => (
          <div className="Payment-item" key={key}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;