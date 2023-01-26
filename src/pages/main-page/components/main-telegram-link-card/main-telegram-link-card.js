import React from 'react';

import { Card } from 'components/card';
import telegram from 'assets/images/telegram.svg';

import './main-telegram-link-card.scss';


export const MainTelegramLinkCard = () => {
  return (
    <Card linkTo="https://t.me/Thredas" externalLink>
      <div className="telegram-link">
        <img src={telegram} alt="telegram" />
      </div>
    </Card>
  );
};