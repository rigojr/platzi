import React from 'react';
import { TITLE_WEB_APP } from '../common/types';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">{TITLE_WEB_APP}</h1>
      <div className="Header-checkout">
        Checkout
      </div>
    </header>
  );
}

export default Header;