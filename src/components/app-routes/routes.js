import { MainPage } from 'pages/main-page';
import { AboutMePage } from 'pages/about-me-page';
import { ResumePage } from 'pages/resume-page';
import { ProjectsPage } from 'pages/projects-page';
import { ContactMePage } from 'pages/contact-me-page';
import { SnakeGamePage } from 'pages/snake-game-page';

export const routes = {
  MAIN_PAGE: {
    path: '/',
    name: 'Главная',
    component: <MainPage />,
    inHeader: true,
  },
  ABOUT_ME_PAGE: {
    path: '/about-me',
    name: 'Обо мне',
    component: <AboutMePage />,
    inHeader: true,
  },
  RESUME_PAGE: {
    path: '/resume',
    name: 'Резюме',
    component: <ResumePage />,
    inHeader: true,
  },
  PROJECTS_PAGE: {
    path: '/projects',
    name: 'Работы',
    component: <ProjectsPage />,
    inHeader: true,
  },
  CONTACT_ME_PAGE: {
    path: '/contact-me',
    name: 'Связаться со мной',
    component: <ContactMePage />,
    inHeader: false,
  },
  SNAKE_GAME_PAGE: {
    path: '/snake-game',
    name: 'Игра "Змейка"',
    component: <SnakeGamePage />,
    inHeader: false,
  },
};