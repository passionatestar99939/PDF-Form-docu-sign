import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import SignPage from '../containers/SignPage';
import ConvertPDFPage from '../containers/ConvertPDFPage';
import ConvertConsultantPage from '../containers/ConvertConsultantPage';
import ConvertCommissionPage from '../containers/ConvertCommissionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SignPage />} path="/contract/:id" />
        <Route element={<ConvertPDFPage />} path="/convert-pdf-customer/:id" />
        <Route
          element={<ConvertConsultantPage />}
          path="/convert-pdf-consultant/:id"
        />
        <Route
          element={<ConvertCommissionPage />}
          path="/convert-pdf-commission/:id"
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
