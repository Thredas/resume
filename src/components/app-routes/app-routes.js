import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { routes } from './routes';


const AppRoutes = () => {
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

export default AppRoutes;