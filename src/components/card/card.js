import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './card.scss';


export const Card = React.memo((
  { children, className, wrapperClass, style, linkTo, size = 'm', externalLink }
) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`card-wrapper card-${size} ${wrapperClass}`} >
      <Link
        className={`
          animation-slideIn card ${linkTo && 'card-hover'} ${className}
        `}
        style={{ ...style }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        to={(!externalLink && linkTo) ?? ''}
        onClick={() => {
          if(externalLink) window.open(linkTo, '_blank');
        }}
      >
        {children}

        {linkTo && (
          <div className="card-link-icon">
            <span
              className="material-icons-outlined"
              style={{ color: isHover ? '#3b8ee1' : '#c0c0c0' }}
            >
              {externalLink ? 'open_in_new' : 'arrow_circle_right'}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
});