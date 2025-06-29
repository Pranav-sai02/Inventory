import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

import Home from '../pages/Home/Home';
import PropertyInformation from '../pages/Property-information/property-Information';
import BasicInformation from '../pages/Property-information/Basic-Iformation/Basic-information';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/property-information" element={<PropertyInformation />} />
      <Route path="/basic-information" element={<BasicInformation />} />
      
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      
    </Routes>
  );
};

export default AppRoutes;
