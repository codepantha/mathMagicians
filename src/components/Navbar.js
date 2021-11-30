import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div className="navbar__container pa4">
    <div className="navbar__container-logo">
      <p className="f3 b">Math Magicians</p>
    </div>
    <div className="navbar__container-navlinks flex">
      <Link to="/" className="no_underline white">
        <p className="navbar__container-navlinks_link">
          Home
        </p>
      </Link>
      <Link to="/calculator" className="no_underline white">
        <p className="navbar__container-navlinks_link">
          Calculator
        </p>
      </Link>
      <Link to="/quote" className="no_underline white">
        <p className="navbar__container-navlinks_link">
          Quote
        </p>
      </Link>
    </div>
  </div>
);

export default Navbar;
