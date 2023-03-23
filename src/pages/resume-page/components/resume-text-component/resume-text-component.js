import React from 'react';

import { CardsWrapper } from 'components/cards-wrapper';
import { HeadingText, RegularText, SecondaryText } from 'components/text';

import './resume-text-component.scss';


export const ResumeTextComponent = () => {
  return (
    <div className="resume-text-component">
      <CardsWrapper>
        <div className="animation-slideIn resume-text-component-section">
          <HeadingText className="resume-text-component-heading">
            Обо мне
          </HeadingText>

          <RegularText className="resume-text-component-text">
            I’m a product designer based in Sydney specialising in web design,
            illustration and visual development. I have worked in multidisciplinary
            fields, in both large and small companies, startups and as a freelancer.
          </RegularText>
        </div>


        <div className="animation-slideIn resume-text-component-section">
          <HeadingText className="resume-text-component-heading">
            Опыт работы
          </HeadingText>

          <div className="resume-text-component-exp-section">
            <HeadingText className="resume-text-component-heading-colored">
              Лига Цифровой Экономики
            </HeadingText>

            <SecondaryText className="resume-text-component-date">
              Август 2021 - текущее время
            </SecondaryText>

            <RegularText className="resume-text-component-text">
              Details of your job experience goes here.
              Briefly showcase what you did and what you
              have accomplished at this role.
              You can also talk about the tools you used.
            </RegularText>
          </div>

          <div className="resume-text-component-exp-section">
            <HeadingText className="resume-text-component-heading-colored">
              Лига Цифровой Экономики
            </HeadingText>

            <SecondaryText className="resume-text-component-date">
              Август 2021 - текущее время
            </SecondaryText>

            <RegularText className="resume-text-component-text">
              Details of your job experience goes here.
              Briefly showcase what you did and what you
              have accomplished at this role.
              You can also talk about the tools you used.
            </RegularText>
          </div>

          <div className="resume-text-component-exp-section">
            <HeadingText className="resume-text-component-heading-colored">
              Лига Цифровой Экономики
            </HeadingText>

            <SecondaryText className="resume-text-component-date">
              Август 2021 - текущее время
            </SecondaryText>

            <RegularText className="resume-text-component-text">
              Details of your job experience goes here.
              Briefly showcase what you did and what you
              have accomplished at this role.
              You can also talk about the tools you used.
            </RegularText>
          </div>
        </div>

        <div className="animation-slideIn resume-text-component-section">
          <HeadingText className="resume-text-component-heading">
            Образование
          </HeadingText>

          <div className="animation-slideIn resume-text-component-exp-section">
            <HeadingText className="resume-text-component-heading-colored">
              Казанский Федеральный Университет
            </HeadingText>

            <SecondaryText className="resume-text-component-date">
              Сентябрь 2017 - Июль 2021
            </SecondaryText>

            <RegularText className="resume-text-component-text">
              Details of your job experience goes here.
              Briefly showcase what you did and what you
              have accomplished at this role.
              You can also talk about the tools you used.
            </RegularText>
          </div>
        </div>
      </CardsWrapper>
    </div>
  );
};
