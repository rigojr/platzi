import React from 'react';
import { ILayout } from '../common/types';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;