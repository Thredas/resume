import MainPage from '../../pages/main-page/main-page';

export const routes = {
  MAIN_PAGE: {
    path: '/',
    name: 'Главная',
    component: <MainPage />,
    inHeader: true,
  },
  PROJECTS_PAGE: {
    path: '/projects',
    name: 'Работы',
    component: <></>,
    inHeader: true,
  },
  ABOUT_ME_PAGE: {
    path: '/about-me',
    name: 'Обо мне',
    component: <></>,
    inHeader: true,
  },
  RESUME_PAGE: {
    path: '/resume',
    name: 'Резюме',
    component: <></>,
    inHeader: true,
  },
  CONTACT_ME_PAGE: {
    path: '/contact-me',
    name: 'Связаться со мной',
    component: <></>,
    inHeader: false,
  },
};