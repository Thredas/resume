import React from 'react';

import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';
import gwentLogo from 'assets/images/gwent.png';

import './main-gwent-game-card.scss';


export const MainGwentGameCard = () => {
  return (
    <Card className="main-gwent-game-card">
      <div className="main-gwent-game-card-icon-container">
        <img
          className="main-gwent-game-card-icon"
          src={gwentLogo}
          alt="snake game logo"
        />
      </div>

      <SecondaryText className="main-gwent-game-card-subtitle">
        Клон игры
      </SecondaryText>

      <HeadingText className="main-gwent-game-card-title">
        Гвинт
      </HeadingText>
    </Card>
  );
};