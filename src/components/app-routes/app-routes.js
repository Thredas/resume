import React, { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from 'components/app-routes';
import { NotFoundPage } from 'pages/not-found-page';


export const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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