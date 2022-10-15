import React from 'react';
import HomePage from '../pages/HomePage';
import Login from '../pages/login/Login';

export interface RouteType {
  title: string;
  path: string;
  Component: React.FC;
}
export const adminRoutes: RouteType[] = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const mentorRoutes = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const studentRoutes = [
  {
    title: 'Main Page',
    path: '/',
    Component: HomePage,
  },
];

export const notAuthRoutes = [
  {
    title: 'Main Page',
    path: '/',
    Component: Login,
  },
];