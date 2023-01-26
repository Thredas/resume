import React, { useEffect, useState } from 'react';

import { Button } from 'components/button';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'components/app-routes';

import './mobile-header-menu.scss';


export const MobileHeaderMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation()

  const [shouldRender, setRender] = useState(isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) setRender(true);
  }, [isMenuOpen]);

  const onAnimationEnd = () => {
    if (!isMenuOpen) setRender(false);
  };

  const renderHeaderLinks = () => {
    return Object.values(routes).map((route) => {
      const isActive = location.pathname === route.path;

      return route.inHeader && (
        <Link
          key={route.path}
          to={route.path}
          onClick={() => setIsMenuOpen(false)}
          className="mobile-header-menu-link-container"
        >
          <Button
            className={
              isActive
                ? 'mobile-header-menu-link active'
                : 'mobile-header-menu-link'
            }
          >
            {route.name}
          </Button>
        </Link>
      );
    })
  }

  return (
    shouldRender && (
      <>
        <div
          className="mobile-header-menu"
          style={{ animation: `${isMenuOpen ? 'slideFromTop' : 'slideToTop'}` }}
          onAnimationEnd={onAnimationEnd}
        >
          <div className="mobile-header-menu-top">
            <Button
              type="icon"
              className="mobile-header-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-icons-round mobile-header-button-icon">
                close
              </span>
            </Button>
          </div>

          <div className="mobile-header-menu-links">
            {renderHeaderLinks()}
          </div>


          <Link
            className="mobile-header-menu-button-container"
            to={routes.CONTACT_ME_PAGE.path}
            onClick={() => setIsMenuOpen(false)}
          >
            <Button className="mobile-header-menu-button">
              Связаться со мной
            </Button>
          </Link>
        </div>

        <div
          className="mobile-header-menu-container"
          onClick={() => setIsMenuOpen(false)}
          style={{ animation: `${isMenuOpen ? 'popIn' : 'popOut'}` }}
        />
      </>
    )
  );
};