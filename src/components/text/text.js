import React from 'react';
import './text.scss';

const RegularText = React.memo(({ className, children }) => {
  return (
    <span className={'text regular ' + className}>
      {children}
    </span>
  );
});

const SecondaryText = React.memo(({ className, children }) => {
  return (
    <span className={'text secondary ' + className}>
      {children}
    </span>
  );
});

const HeadingText = React.memo(({ className, children }) => {
  return (
    <div className={'text heading ' + className}>
      {children}
    </div>
  );
});

export { RegularText, SecondaryText, HeadingText };