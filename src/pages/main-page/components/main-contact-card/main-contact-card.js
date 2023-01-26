import React from 'react';

import { routes } from 'components/app-routes';
import { HeadingText, RegularText } from 'components/text';
import { Card } from 'components/card';

import './main-contact-card.scss';


export const MainContactCard = () => {
  return (
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
  );
};