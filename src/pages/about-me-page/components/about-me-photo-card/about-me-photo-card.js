import React from 'react';

import { Card } from 'components/card';
import selfie from 'assets/images/selfie.jpg';

import './about-me-photo-card.scss';


export const AboutMePhotoCard = () => {
  return (
    <Card
      wrapperClass="about-me-photo-card-wrapper"
      className="about-me-photo-card"
      style={{ backgroundImage: `url(${selfie})` }}
    />
  );
};