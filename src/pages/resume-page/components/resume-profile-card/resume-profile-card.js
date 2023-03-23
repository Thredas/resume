import React from 'react';

import { Card } from 'components/card';
import { BoldText, HeadingText, SecondaryText } from 'components/text';
import avatar from 'assets/images/avatar.jpeg';

import './resume-profile-card.scss';
import { Button } from 'components/button';

export const ResumeProfileCard = () => {
  return (
    <Card
      wrapperClass="resume-profile-card-wrapper"
      className="resume-profile-card"
    >
      <div className="resume-profile-card-avatar-container">
        <img className="resume-profile-card-avatar" src={avatar} alt="avatar" />
      </div>

      <HeadingText className="resume-profile-card-text name">
        Пантелеев Кирилл
      </HeadingText>

      <BoldText className="resume-profile-card-text position">
        Middle Frontend разработчик
      </BoldText>

      <a
        className="resume-profile-card-text contact-container"
        href="tel:+79625739006"
      >
        <SecondaryText className="resume-profile-card-text contact">
          +7 (962) 573-90-06
        </SecondaryText>
      </a>

      <a
        className="resume-profile-card-text contact-container"
        href="mailto: panteleyevkirill451@gmail.com"
      >
        <SecondaryText className="resume-profile-card-text contact">
          panteleyevkirill451@gmail.com
        </SecondaryText>
      </a>

      <a
        className="resume-profile-card-text contact-container"
        href="https://www.thredas.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SecondaryText className="resume-profile-card-text contact">
          www.thredas.com
        </SecondaryText>
      </a>

      <div className="resume-profile-card-button-container">
        <Button className="resume-profile-card-button">
          <span className="material-icons-round">download</span>

          &nbsp;&nbsp;&nbsp;Скачать как .pdf
        </Button>
      </div>
    </Card>
  );
};