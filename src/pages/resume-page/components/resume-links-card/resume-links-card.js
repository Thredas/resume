import React from 'react';

import { Card } from 'components/card';
import { ResumeLinksCardLink } from './components/resume-links-card-link';

import './resume-links-card.scss';


export const ResumeLinksCard = () => {
  return (
    <Card
      wrapperClass="resume-links-card-wrapper"
      className="resume-links-card"
    >
      <ResumeLinksCardLink link="https://t.me/Thredas" linkName="Telegram" />

      <ResumeLinksCardLink
        link="https://www.linkedin.com/in/kirill-pantelyev-473712250/"
        linkName="LinkedIn"
      />

      <ResumeLinksCardLink
        link="https://github.com/Thredas"
        linkName="GitHub"
      />
    </Card>
  );
};