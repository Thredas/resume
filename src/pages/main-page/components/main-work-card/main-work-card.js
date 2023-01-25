import React from 'react';

import { routes } from 'components/app-routes';
import { Card } from 'components/card';
import { BoldText, SecondaryText } from 'components/text';
import reactLogo from 'assets/images/react.svg';
import typeScriptLogo from 'assets/images/typescript.svg';
import reduxLogo from 'assets/images/redux.svg';

import './main-work-card.scss';


export const MainWorkCard = () => {
  return (
    <Card
      className="main-work-card"
      linkTo={routes.PROJECTS_PAGE.path}
      size="l"
    >
      <div />

      <SecondaryText className="main-work-card-title">
        Мой стек
      </SecondaryText>

      <div className="main-work-card-items">
        <div className="main-work-card-item">
          <img
            className="main-work-card-item-icon"
            src={reactLogo}
            alt="react logo"
          />

          <BoldText className="main-work-card-item-title">
            REACT
          </BoldText>
        </div>

        <div className="main-work-card-item">
          <img
            className="main-work-card-item-icon"
            src={reduxLogo}
            alt="react logo"
          />

          <BoldText className="main-work-card-item-title">
            REDUX
          </BoldText>
        </div>

        <div className="main-work-card-item">
          <img
            className="main-work-card-item-icon"
            src={typeScriptLogo}
            alt="react logo"
          />

          <BoldText className="main-work-card-item-title">
            TYPESCRIPT
          </BoldText>
        </div>

        {/*<div className="main-work-card-item">*/}
        {/*  <span className="material-icons-round main-work-card-item-icon">*/}
        {/*    web*/}
        {/*  </span>*/}

        {/*  <BoldText className="main-work-card-item-title">*/}
        {/*    ФРОНТЕНД*/}
        {/*  </BoldText>*/}
        {/*</div>*/}

        {/*<div className="main-work-card-item">*/}
        {/*  <span className="material-icons-round main-work-card-item-icon">*/}
        {/*    phone_iphone*/}
        {/*  </span>*/}

        {/*  <BoldText className="main-work-card-item-title">*/}
        {/*    ПРИЛОЖЕНИЯ*/}
        {/*  </BoldText>*/}
        {/*</div>*/}

        {/*<div className="main-work-card-item">*/}
        {/*  <span className="material-icons-round main-work-card-item-icon">*/}
        {/*    gamepad*/}
        {/*  </span>*/}

        {/*  <BoldText className="main-work-card-item-title">*/}
        {/*    ИГРЫ*/}
        {/*  </BoldText>*/}
        {/*</div>*/}
      </div>
    </Card>
  );
};