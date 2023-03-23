import React from 'react';

import { CardsWrapper } from 'components/cards-wrapper';
import { ResumeProfileCard } from './components/resume-profile-card';
import { ResumeLinksCard } from './components/resume-links-card';
import { ResumeSkillsCard } from './components/resume-skills-card';
import { ResumeTextComponent } from './components/resume-text-component';

import './resume-page.scss';


export const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="resume-page-left-part">
        <CardsWrapper>
          <ResumeProfileCard />
          <ResumeSkillsCard />
          <ResumeLinksCard />
        </CardsWrapper>
      </div>

      <div className="resume-page-right-part">
        <ResumeTextComponent />
      </div>
    </div>
  );
};