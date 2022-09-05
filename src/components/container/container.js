import React from 'react';
import './container.scss';

const Container = React.memo(({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        {children}
      </div>
    </div>
  );
});

export default Container;