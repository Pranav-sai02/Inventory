import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';

import SidebarMenu from './component/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';



function App() {
  return (
       <div className="app-layout">
      <Header />
      <div style={{ display: 'flex' }}>
        <SidebarMenu />
         <main style={{ padding: '20px', flex: 1 }}>
          <AppRoutes />
        </main>
      </div>
    </div>
    
  );
}

export default App;
