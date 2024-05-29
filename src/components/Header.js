import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/" className="nav-link text-danger" onClick={handleNavCollapse}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-danger" onClick={handleNavCollapse}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-danger" onClick={handleNavCollapse}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
