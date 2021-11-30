import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';

const Menu = () => (
  <>
    <Link to="/" className="no_underline white">
      <p className="navbar__container-navlinks_link">Home</p>
    </Link>
    <Link to="/calculator" className="no_underline white">
      <p className="navbar__container-navlinks_link">Calculator</p>
    </Link>
    <Link to="/quote" className="no_underline white">
      <p className="navbar__container-navlinks_link">Quote</p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar__container pa4">
      <div className="navbar__container-logo">
        <p className="f3 b">Math Magicians</p>
      </div>
      <div className="navbar__container-navlinks flex">
        <Menu />
      </div>
      <div className="navbar__container-menu">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu2Line onClick={() => setToggleMenu(true)} />
        )}
        {
          toggleMenu && (
            <div className="navbar__container-menu_items shadow-pop-tr">
              <Menu />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
