import React from 'react';
import { TITLE_WEB_APP, COPY_RIGHT_TEXT } from '../common/types';
import '../styles/components/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <p className="Footer-title">{TITLE_WEB_APP}</p>
      <p className="Footer-copy">{COPY_RIGHT_TEXT}</p>
    </footer>
  );
}

export default Footer;
