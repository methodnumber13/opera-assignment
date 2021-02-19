import { lazy } from 'react';

const Home = lazy(() => import('./home'));

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
];
