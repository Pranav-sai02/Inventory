import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
  <div className="logo-container">
    <img
      src="https://avoota.com/3ec4229deba2cb3d6d94311608defbc7.png"
      alt="Avoota Logo"
      className="logo-icon"
    />
  </div>
</header>
  );
};

export default Header;
