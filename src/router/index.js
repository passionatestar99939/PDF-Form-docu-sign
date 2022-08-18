import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import PDFPage from '../containers/PDFPage';

export const pages = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/download',
    exact: true,
    component: PDFPage,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={HomePage} exact={true} path="/homepage" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
