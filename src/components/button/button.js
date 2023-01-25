import React from 'react';
import './button.scss'

export const Button = React.memo(({
  children,
  className,
  onClick,
  type = 'primary',
}) => {
  return (
    <button
      className={`button ${type} ` + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
});