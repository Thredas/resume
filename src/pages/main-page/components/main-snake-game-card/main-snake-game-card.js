import React from 'react';

import { routes } from 'components/app-routes';
import { Card } from 'components/card';
import { HeadingText, SecondaryText } from 'components/text';
import snakeLogo from 'assets/images/snake.svg';

import './main-snake-game-card.scss';


export const MainSnakeGameCard = () => {
  return (
    <Card className="main-snake-game-card" linkTo={routes.SNAKE_GAME_PAGE.path}>
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