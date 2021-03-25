import React from 'react';
import { Link } from 'react-router-dom';
import { TITLE_WEB_APP } from '../common/types';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">{TITLE_WEB_APP}</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </header>
  );
}

export default Header;