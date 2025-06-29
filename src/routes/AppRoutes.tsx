import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

import Home from '../pages/Home/Home';
import PropertyInformation from '../component/Property-information/property-Information';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/property-information" element={<PropertyInformation />} />
      
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      
    </Routes>
  );
};

export default AppRoutes;
