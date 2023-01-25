import React from 'react';

import './text.scss';


export const RegularText = React.memo(({ className, children }) => {
  return (
    <span className={'text regular ' + className}>
      {children}
    </span>
  );
});

export const SecondaryText = React.memo(({ className, children }) => {
  return (
    <span className={'text secondary ' + className}>
      {children}
    </span>
  );
});

export const BoldText = React.memo(({ className, children }) => {
  return (
    <span className={'text bold ' + className}>
      {children}
    </span>
  );
});

export const HeadingText = React.memo(({ className, children }) => {
  return (
    <div className={'text heading ' + className}>
      {children}
    </div>
  );
});