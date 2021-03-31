import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TITLE_WEB_APP, IUseInitialState } from '../common/types';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  const { state } = useContext(AppContext) as IUseInitialState;
  const { cart } = state;
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">{TITLE_WEB_APP}</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
}

export default Header;