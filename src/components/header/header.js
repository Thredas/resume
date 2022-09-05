import React from 'react';
import './header.scss';

// import logo from '../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import Button from '../button/button';
import { routes } from '../app-routes/routes';

const Header = React.memo(() => {
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
      {/*<div className="header-logo-container">*/}
      {/*  <Link to="/">*/}
      {/*    <img className="header-logo" src={logo} alt="logo" />*/}
      {/*  </Link>*/}
      {/*</div>*/}

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

export default Header;