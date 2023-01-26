import React from 'react';

import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';

import './about-me-info-card.scss';


export const AboutMeInfoCard = () => {
  return (
    <Card size="l" className="about-me-info-card">
      <HeadingText className="about-me-info-card-title">
        Обо мне
      </HeadingText>

      <SecondaryText  className="about-me-info-card-text">
        I’m a product designer based in Sydney specialising in web design,
        illustration and visual development. I have worked in multidisciplinary
        fields, in both large and small companies, startups and as a freelancer.
      </SecondaryText>
    </Card>
  );
};