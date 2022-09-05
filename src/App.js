import React from 'react';
import '@material-design-icons/font'

import AppRoutes from './components/app-routes/app-routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Container from './components/container/container';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <AppRoutes />

        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
