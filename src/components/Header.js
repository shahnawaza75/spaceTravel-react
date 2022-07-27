import React from 'react';
import planet from '../images/planet.png';
import './Header.css';
import Nav from './Nav';

const Header = () => (
  <div className="container">
    <nav className="header-nav">
      <div className="header-img-div">
        <img src={planet} alt="" className="header-img" />
        <h2>Space Travelers &apos; Hub</h2>
      </div>
      <Nav />
    </nav>
    <div className="line" />
  </div>
);

export default Header;
