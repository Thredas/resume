import React from 'react';

import './container.scss';


export const Container = React.memo(({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        {children}
      </div>
    </div>
  );
});