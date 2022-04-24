import React from "react";
import { Routes, Route } from "react-router-dom";

import {  Backoffice,BackofficeLayout } from './index'

export const PrivateRoutes = () => {
  return (
    <BackofficeLayout>
      <Routes>
        <Route path="/" element={<Backoffice /> } />  
      </Routes>
    </BackofficeLayout>
  );
};
