import React from 'react';

import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';
import snakeLogo from 'assets/images/snake.svg';

import './main-snake-game-card.scss';


export const MainSnakeGameCard = () => {
  return (
    <Card className="main-snake-game-card">
      <div className="main-snake-game-card-icon-container">
        <img
          className="main-snake-game-card-icon"
          src={snakeLogo}
          alt="snake game logo"
        />
      </div>

      <SecondaryText className="main-snake-game-card-subtitle">
        Игра на React
      </SecondaryText>

      <HeadingText className="main-snake-game-card-title">Змейка</HeadingText>
    </Card>
  );
};