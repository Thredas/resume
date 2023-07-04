import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { routes } from 'components/app-routes/routes';
import { HeadingText } from 'components/text';
import logo from 'assets/images/avatar.jpeg';

import './header.scss';


export const Header = React.memo(() => {
  const location = useLocation()

  const renderHeaderLinks = () => {
    return Object.values(routes).map((route) => {
      const isActive = location.pathname === route.path;

      return route.inHeader && (
        <Link
          key={route.path} to={route.path}
          className={isActive ? 'header-link active' : 'header-link'}
        >
          {route.name}
        </Link>
      );
    })
  }

  return (
    <div className="header">
      <Link className="header-logo-container" to="/">
        <img className="header-logo-avatar" src={logo} alt="avatar" />

        <HeadingText className="header-logo-text">
          Кирилл<br />
          Пантелеев
        </HeadingText>
      </Link>

      <div className="header-links">
        {renderHeaderLinks()}
      </div>
    </div>
  );
});