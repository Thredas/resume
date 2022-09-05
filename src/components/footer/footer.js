import React from 'react';
import './footer.scss';
import { SecondaryText } from '../text/text';


const Footer = React.memo(() => {
  return (
    <div className="footer">
      <div className="footer-links">

      </div>

      <div className="footer-signature">
        <SecondaryText className="footer-signature-text">
          Разработано Пантелеевым Кириллом
        </SecondaryText>

        <SecondaryText className="footer-signature-text">
          © {new Date().getFullYear()}
        </SecondaryText>
      </div>
    </div>
  );
});


export default Footer;