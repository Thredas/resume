import React from 'react';

import { CardsWrapper } from 'components/cards-wrapper';
import { ExternalLinkCard } from 'components/external-link-card';
import { MainInfoCard } from './components/main-info-card';
import { MainProfileCard } from './components/main-profile-card';
import { MainContactCard } from './components/main-contact-card';
import { MainWorkCard } from './components/main-work-card';
import { MainSnakeGameCard } from './components/main-snake-game-card';

import telegram from 'assets/images/telegram.svg';
import github from 'assets/images/github.svg';

import './main-page.scss';


export const MainPage = () => {
  return (
    <div className="main-page">
      <CardsWrapper>
        <MainInfoCard />
        <MainProfileCard />
        <ExternalLinkCard imgSrc={telegram} linkTo="https://t.me/Thredas" />
        <MainWorkCard />
        <ExternalLinkCard linkTo="https://github.com/Thredas" imgSrc={github} />
        <MainSnakeGameCard />
        <MainContactCard />
      </CardsWrapper>
    </div>
  );
};
