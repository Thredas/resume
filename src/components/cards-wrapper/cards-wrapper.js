import React from 'react';

import './cards-wrapper.scss';


export const CardsWrapper = React.memo(({ children }) => {
  return (
    <div className="cards-wrapper">
      {children}
    </div>
  );
});