import React from 'react';

import { CardsWrapper } from 'components/cards-wrapper';
import { MainInfoCard } from './components/main-info-card';
import { MainProfileCard } from './components/main-profile-card';
import { MainContactCard } from './components/main-contact-card';
import { MainWorkCard } from './components/main-work-card';
import { MainSnakeGameCard } from './components/main-snake-game-card';
import { MainGwentGameCard } from './components/main-gwent-game-card';
import { MainTelegramLinkCard } from './components/main-telegram-link-card';

import './main-page.scss';


export const MainPage = () => {
  return (
    <div className="main-page">
      <CardsWrapper>
        <MainInfoCard />
        <MainProfileCard />
        <MainTelegramLinkCard />
        <MainWorkCard />
        <MainSnakeGameCard />
        <MainGwentGameCard />
        <MainContactCard />
      </CardsWrapper>
    </div>
  );
};
