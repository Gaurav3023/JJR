import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa'; // Importing icons from react-icons

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/constructionbutton.png" alt="Company Logo" style={{ width: '120px', height: 'auto' }} />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto"> {/* Changed ml-auto */}
            <li className="nav-item">
              <Link to="/" className="nav-link text-danger" onClick={handleNavCollapse}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <FaHome style={{ marginRight: '5px' }} /> Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-danger" onClick={handleNavCollapse}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <FaInfoCircle style={{ marginRight: '5px' }} /> About Us
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-danger" onClick={handleNavCollapse}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <FaAddressBook style={{ marginRight: '5px' }} /> Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
