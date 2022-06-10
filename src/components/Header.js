import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
    <div className="row">
      <header className="header">
      <nav>
        <div className ="header__logo"></div>
        <ul className ="header__items">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
        </ul>
        </nav>
      </header>
      </div>
    );
  }

export default Header;