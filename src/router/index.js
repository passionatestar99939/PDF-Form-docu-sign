import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import SignPage from '../containers/SignPage';
import ConvertPDFPage from '../containers/ConvertPDFPage';
import ConvertLandscapUpPage from '../containers/ConvertLandscapUpPage';
import ConvertLandscapDownPage from '../containers/ConvertLandscapDownPage';
import ConvertConsultantPage from '../containers/ConvertConsultantPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SignPage />} path="/contract/:id" />
        <Route element={<ConvertPDFPage />} path="/convert-pdf/:id" />
        <Route
          element={<ConvertLandscapUpPage />}
          path="/convert-landscape-up/:id"
        />
        <Route
          element={<ConvertConsultantPage />}
          path="/convert-consultant/:id"
        />
        <Route
          element={<ConvertLandscapDownPage />}
          path="/convert-landscape-down/:id"
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
