import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    showButton();
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <img src="images/Icon.svg" className="home__hero-img" />
              <p style={{ marginLeft: '10px', fontWeight: '300' }}>whichride</p>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  The App
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link to="/get-in-touch" className="nav-links">
                    Get in Touch
                  </Link>
                ) : (
                  <Link to="/get-in-touch" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Get in Touch
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
