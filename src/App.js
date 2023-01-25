import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'components/app-routes';
import { Header } from 'components/header';
import { MobileHeader } from 'components/mobile-header';
import { Footer } from 'components/footer';
import { Container } from 'components/container';

import '@material-design-icons/font';


export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <MobileHeader />

        <AppRoutes />

        <Footer />
      </Container>
    </BrowserRouter>
  );
}
