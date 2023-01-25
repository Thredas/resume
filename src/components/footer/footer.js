import React from 'react';
import { SecondaryText, BoldText } from 'components/text';

import './footer.scss';


export const Footer = React.memo(() => {
  return (
    <div className="footer">
      <div className="footer-links">

      </div>

      <div className="footer-signature">
        <SecondaryText className="footer-signature-text">
          Разработал Пантелеев Кирилл
        </SecondaryText>

        <BoldText className="footer-signature-text">
          © {new Date().getFullYear()}
        </BoldText>
      </div>
    </div>
  );
});