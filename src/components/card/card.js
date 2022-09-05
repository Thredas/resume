import React, { useState } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

const Card = React.memo((
  { children, className, style, linkTo, size = 'm', externalLink }
) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={'card-wrapper card-' + size + ' '}
      style={{ ...style }}
    >
      <Link
        className={'card ' + className}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        to={linkTo ?? ''}
      >
        {children}

        <div className="card-link-icon">
          <span
            className="material-icons-outlined"
            style={{ color: isHover ? '#3b8ee1' : '#c0c0c0' }}
          >
            {externalLink ? 'open_in_new' : 'arrow_circle_right'}
          </span>
        </div>
      </Link>
    </div>
  );
});

export default Card;