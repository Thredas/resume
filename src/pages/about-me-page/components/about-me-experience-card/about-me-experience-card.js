import React from 'react';

import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';

import './about-me-experience-card.scss';

export const AboutMeExperienceCard = () => {
  return (
    <Card size="l" className="about-me-experience-card">
      <HeadingText className="about-me-experience-card-title">
        Опыт
      </HeadingText>

      <SecondaryText  className="about-me-experience-card-text">
        I’m a product designer based in Sydney specialising in web design,
        illustration and visual development. I have worked in multidisciplinary
        fields, in both large and small companies, startups and as a freelancer.
      </SecondaryText>
    </Card>
  );
};