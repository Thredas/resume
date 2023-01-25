import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { routes } from 'components/app-routes';
import { NotFoundPage } from 'pages/not-found-page';


export const AppRoutes = () => {
  return (
    <Routes>
      {Object.values(routes).map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
            exact
          />
        );
      })}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};