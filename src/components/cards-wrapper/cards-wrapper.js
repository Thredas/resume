import React from 'react';
import './cards-wrapper.scss';

const CardsWrapper = React.memo(({ children }) => {
  return (
    <div className="cards-wrapper">
      {children}
    </div>
  );
});

export default CardsWrapper;