import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'components/button';
import { HeadingText } from 'components/text';
import { MobileHeaderMenu } from './components/mobile-header-menu';

import './mobile-header.scss';


export const MobileHeader = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mobile-header">
      <div className="mobile-header-logo-container">
        <Link className="mobile-header-logo-text" to="/">
          <HeadingText className="mobile-header-logo-text">
            Портфолио
          </HeadingText>
        </Link>
      </div>

      <div className="mobile-header-button-container">
        {!isMenuOpen && (
          <Button
            type="icon"
            className="mobile-header-button"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="material-icons-round mobile-header-button-icon">
              menu
            </span>
          </Button>
        )}
      </div>

      <MobileHeaderMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
});