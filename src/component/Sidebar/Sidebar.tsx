import React, { useRef, useState } from 'react';
import 'primeicons/primeicons.css';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faChartBar, faHome } from '@fortawesome/free-solid-svg-icons';




const Sidebars: React.FC = () => {

  return (

    <div className="sidebar">
      <h2 className="logo">My App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="me-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faChartBar} className="me-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/property-information" className="sidebar-link">
              <FontAwesomeIcon icon={faBuilding} className="me-2" />
              <span>Property Information</span>
            </Link>
          </li>
          <li>
            <Link to="/basic-information" className="sidebar-link">
              <FontAwesomeIcon icon={faBuilding} className="me-2" />
              <span>Basic Information</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>


  );
};

export default Sidebars;
