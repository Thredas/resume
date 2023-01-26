import React from 'react';

import { SecondaryText, BoldText } from 'components/text';
import { routes } from 'components/app-routes';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'components/button';

import './footer.scss';


export const Footer = React.memo(() => {
  const location = useLocation();

  const renderFooterLinks = () => {
    return Object.values(routes).map((route) => {
      const isActive = location.pathname === route.path;

      return route.inHeader && (
        <Link key={route.path} to={route.path}>
          <Button className={isActive ? 'header-link active' : 'header-link'}>
            {route.name}
          </Button>
        </Link>
      );
    })
  }

  return (
    <div className="footer">
      <div className="footer-links">
        {renderFooterLinks()}
      </div>

      <div className="social-links">

      </div>

      <div className="footer-signature">
        <SecondaryText className="footer-signature-text">
          Разработал Пантелеев Кирилл
        </SecondaryText>

        <SecondaryText className="footer-signature-text">
          Дизайн вдохновлен&nbsp;

          <a
            href="https://gridfolio.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BoldText className="gridfolio-link">
              GridFolio
            </BoldText>
          </a>
        </SecondaryText>

        <BoldText className="footer-signature-text">
          © {new Date().getFullYear()}
        </BoldText>
      </div>
    </div>
  );
});