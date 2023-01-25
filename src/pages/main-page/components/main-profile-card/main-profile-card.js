import React from 'react';

import { routes } from 'components/app-routes';
import { HeadingText, SecondaryText } from 'components/text';
import { Card } from 'components/card';

import './main-profile-card.scss';


export const MainProfileCard = () => {
  return (
    <Card linkTo={routes.RESUME_PAGE.path}>
      <div className="profile-card">
        <span className="material-icons-round profile-card-icon">
          contact_page
        </span>

        <div>
          <SecondaryText className="profile-card-text">
            Узнайте&nbsp;
            <br className="main-info-heading-mobile-break" />
            о моём опыте
          </SecondaryText>

          <HeadingText className="profile-card-heading">
            Посмотреть резюме
          </HeadingText>
        </div>
      </div>
    </Card>
  );
};