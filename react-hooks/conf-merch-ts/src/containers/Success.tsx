import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import { IUseInitialState } from '../common/types';
import Map from '../components/Map';

const Success: React.FC = () => {
  const { state } = useContext(AppContext) as IUseInitialState;
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Success;