import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { routes } from 'components/app-routes/routes';
import { Button } from 'components/button';
import { HeadingText } from 'components/text';

import './header.scss';


export const Header = React.memo(() => {
  const location = useLocation()

  const renderHeaderLinks = () => {
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
    <div className="header">
      <div className="header-logo-container">
        <Link className="header-logo-text" to="/">
          <HeadingText className="header-logo-text">Портфолио</HeadingText>
        </Link>
      </div>

      <div className="header-links">
        {renderHeaderLinks()}
      </div>

      <div className="header-button-container">
        <Link to={routes.CONTACT_ME_PAGE.path}>
          <Button className="header-button">
            Связаться со мной
          </Button>
        </Link>
      </div>
    </div>
  );
});