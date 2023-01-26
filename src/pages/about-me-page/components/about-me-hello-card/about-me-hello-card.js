import React from 'react';

import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';

import './about-me-hello-card.scss';

export const AboutMeHelloCard = () => {
  return (
    <Card className="about-me-hello-card" size="xl">
      <HeadingText className="about-me-hello-card-heading">
        Привет!&nbsp;
        <br className="main-info-heading-mobile-break" />
        Меня зовут Кирилл 👋
      </HeadingText>

      <SecondaryText className="about-me-hello-card-text">
        Я - Frontend-разработчик в <br className="main-info-heading-mobile-break" />
        Лиге Цифровой Экономики
      </SecondaryText>
    </Card>
  );
};