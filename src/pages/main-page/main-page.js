import React from 'react';
import './main-page.scss';

import Card from '../../components/card/card';
import avatar from '../../assets/images/avatar.jpeg';
import telegram from '../../assets/images/telegram.svg';
import { HeadingText, RegularText, SecondaryText } from '../../components/text/text';
import CardsWrapper from '../../components/cards-wrapper/cards-wrapper';
import { routes } from '../../components/app-routes/routes';


const MainPage = () => {
  return (
    <div className="main-page">
      <CardsWrapper>
        <Card size="l" linkTo={routes.ABOUT_ME_PAGE.path}>
          <div className="main-info">
            <div className="main-info-avatar-container">
              <img className="main-info-avatar" src={avatar} alt="avatar" />
            </div>

            <HeadingText className="main-info-heading">
              Привет! Меня зовут Кирилл 👋
            </HeadingText>

            <div className="main-info-footer">
              <SecondaryText className="main-info-secondary-text">
                Я - Middle Frontend-разработчик
              </SecondaryText>
            </div>
          </div>
        </Card>

        <Card linkTo={routes.RESUME_PAGE.path}>
          <div className="profile-card">
            <div />

            <div>
              <span className="material-icons-round profile-card-icon">
                contact_page
              </span>

              <SecondaryText className="profile-card-text">
                Узнайте о моём опыте
              </SecondaryText>

              <HeadingText className="profile-card-heading">
                Посмотреть резюме
              </HeadingText>
            </div>
          </div>
        </Card>

        <Card externalLink>
          <div className="telegram-link">
            <img src={telegram} alt="telegram" />
          </div>
        </Card>

        <Card size="xl"></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

        <Card size="l" linkTo={routes.CONTACT_ME_PAGE.path}>
          <div className="contact-me-card">
            <div />

            <div>
              <RegularText className="contact-me-card-text">
                Давайте работать вместе ✨
              </RegularText>

              <HeadingText className="contact-me-card-heading">
                Связаться со мной
              </HeadingText>
            </div>
          </div>
        </Card>
      </CardsWrapper>
    </div>
  );
};

export default MainPage;