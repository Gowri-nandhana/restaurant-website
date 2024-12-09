import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const cartCount = useSelector((state) => state.cart.count);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); 
  };

  return (
    <div className="navbar">
      <h1>Grill & Grill</h1>
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? (
          <span className="close-icon">&#10005;</span> // Close icon (X)
        ) : (
          <div className="hamburger-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        )}
      </div>
      
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to={'/'} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/About'} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to={'/Menu'} onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to={'/Contact'} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li className="cart-btn">
          <Link to={'/Cart'} onClick={() => setIsMenuOpen(false)}>
            Cart - ({cartCount})
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
