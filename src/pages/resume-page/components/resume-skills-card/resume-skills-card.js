import React from 'react';

import { Card } from 'components/card';
import { HeadingText } from 'components/text';

import './resume-skills-card.scss';


export const ResumeSkillsCard = () => {
  return (
    <Card
      wrapperClass="resume-skills-card-wrapper"
      className="resume-skills-card"
    >
      <HeadingText className="resume-skills-card-title">Навыки</HeadingText>

      <div className="resume-skills-card-rows">
        <ul className="resume-skills-card-list">
          <li>HTML / CSS</li>
          <li>SASS</li>
          <li>JavaScript ES6</li>
          <li>TypeScript</li>
          <li>CSS Анимации</li>
          <li>Асинхронный JS</li>
          <li>Адаптивная верстка</li>
        </ul>

        <ul className="resume-skills-card-list">
          <li>React</li>
          <li>React Hooks</li>
          <li>Redux</li>
          <li>CSS Modules</li>
          <li>Jest</li>
        </ul>
      </div>
    </Card>
  );
};