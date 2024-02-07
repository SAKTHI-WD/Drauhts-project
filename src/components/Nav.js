// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../photos/log().png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(False);



  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li>
            <Link to='/' className='navhome' >Home</Link>
          </li>
          <li>
            <Link to='/projects' className='navproject' >Projects</Link>
          </li>
          <li>
            <Link to='/designs' className='navdesign' >Designs</Link>
          </li>
          <li>
            <Link to='/about' className='navabout' >About</Link>
          </li>
          <li>
            <Link to='/contact' className='navcontact' >Contact</Link>
          </li>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? ( <FontAwesomeIcon icon={faTimes} /> )  : ( <FontAwesomeIcon icon={faBars} /> )}
        </button>
      
    </nav>
  );
};

export default Navbar;
