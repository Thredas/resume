import React from 'react';

import { Card } from 'components/card';
import { RegularText } from 'components/text';

import './about-me-info-card.scss';


export const AboutMeInfoCard = () => {
  return (
    <Card
      wrapperClass="about-me-info-card-container"
      className="about-me-info-card"
      isResizable
      size="l"
    >
      <RegularText className="about-me-info-card-text">
        Я - разработчик, специализируйщися в разработке интерфейсов
        на разных стэках технологий. Основная специализая - React и JS.
      </RegularText>

      <br/>

      <RegularText className="about-me-info-card-text">
        Есть опыт работы в разных областях;
        в том числе в сфере образовния и финтехе.
        Работал как в больших компаниях, так и в маленьких, а также фрилансером.
        На данный момент живу и работаю в Москве.
      </RegularText>
    </Card>
  );
};