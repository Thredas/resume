import React from 'react';

import { CardsWrapper } from 'components/cards-wrapper';
import { HeadingText } from 'components/text';
import { MainSnakeGameCard } from 'pages/main-page/components/main-snake-game-card';

import './projects-page.scss';


export const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <CardsWrapper>
        <HeadingText className="animation-slideIn projects-page-title">
          Мои проекты
        </HeadingText>

        <MainSnakeGameCard />
      </CardsWrapper>
    </div>
  );
};