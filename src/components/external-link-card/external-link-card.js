import React from 'react';

import { Card } from 'components/card';

import './external-link-card.scss';


export const ExternalLinkCard = ({ imgSrc, linkTo }) => {
  return (
    <Card linkTo={linkTo} externalLink>
      <div className="telegram-link">
        <img src={imgSrc} alt="telegram" />
      </div>
    </Card>
  );
};