import React from 'react';

import { HeadingText } from 'components/text';
import { CardsWrapper } from 'components/cards-wrapper';
import { MainProfileCard } from 'pages/main-page/components/main-profile-card';
import { MainContactCard } from 'pages/main-page/components/main-contact-card';
import { AboutMePhotoCard } from './components/about-me-photo-card';
import { AboutMeHelloCard } from './components/about-me-hello-card';
import { AboutMeInfoCard } from './components/about-me-info-card';
import { AboutMeExperienceCard } from './components/about-me-experience-card';
import { MainTelegramLinkCard }
  from 'pages/main-page/components/main-telegram-link-card';

import './about-me-page.scss';


export const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <CardsWrapper>
        <HeadingText className="animation-slideIn about-me-page-title">
          Обо мне
        </HeadingText>

        <AboutMePhotoCard/>
        <AboutMeHelloCard />
        <AboutMeInfoCard />
        <AboutMeExperienceCard />
        <MainTelegramLinkCard />
        <MainProfileCard />
        <MainContactCard />
      </CardsWrapper>
    </div>
  );
};