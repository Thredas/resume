import React from 'react';

import { HeadingText, SecondaryText } from 'components/text';

import './not-found-page.scss';


export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <HeadingText className="not-found-page-title">
        404
      </HeadingText>

      <HeadingText className="not-found-page-subtitle">
        Такой страницы не существует
      </HeadingText>

      <SecondaryText className="not-found-page-text">
        Возможно, вы ошиблись при вводе адреса страницы.
      </SecondaryText>
    </div>
  );
};