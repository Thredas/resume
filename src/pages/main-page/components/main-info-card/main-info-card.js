import React from 'react';

import { routes } from 'components/app-routes';
import { HeadingText, SecondaryText } from 'components/text';
import { Card } from 'components/card';
import avatar from 'assets/images/avatar.jpeg';

import './main-info-card.scss';


export const MainInfoCard = () => {
  return (
    <Card size="l" linkTo={routes.ABOUT_ME_PAGE.path}>
      <div className="main-info">
        <div className="main-info-avatar-container">
          <img className="main-info-avatar" src={avatar} alt="avatar" />
        </div>

        <div className="">
          <HeadingText className="main-info-heading">
            Привет!&nbsp;
            <br className="main-info-heading-mobile-break" />
            Меня зовут Кирилл 👋
          </HeadingText>

          <SecondaryText className="main-info-secondary-text">
            Я - Middle Frontend-разработчик
          </SecondaryText>
        </div>
      </div>
    </Card>
  );
};