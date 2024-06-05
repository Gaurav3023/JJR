import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3">
      <div className="container">
        <div className="column text-center">
          <a href="tel:416-371-0000" className="text-white mr-3" style={{ textDecoration: 'none' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FaPhoneAlt size={20} className="mr-2" /> &nbsp;416-371-0000 &nbsp;
            </span>
          </a>
          <a href="mailto:info@jjrconstruction.com" className="text-white mr-3" style={{ textDecoration: 'none' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FaEnvelope size={20} className="mr-2" /> &nbsp;info@jjrconstruction.com &nbsp;
            </span>
          </a>
          <a href="https://instagram.com/jjr__construction" className="text-white mr-3" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FaInstagram size={20} className="mr-2" /> &nbsp;jjr__construction &nbsp;
            </span>
          </a>
          <a href="https://threads.net/@jjr__construction" className="text-white" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FaThreads size={20} className="mr-2" /> &nbsp;@jjr__construction
            </span>
          </a>
        </div>
        <div className="mt-3">
          <div className="col text-center">
            <Link to="/" className="text-danger mr-3" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FaHome size={20} className="mr-2" /> &nbsp;Home &nbsp;
              </span>
            </Link>
            <Link to="/about" className="text-danger mr-3" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FaInfoCircle size={20} className="mr-2" /> &nbsp;About Us &nbsp;
              </span>
            </Link>
            <Link to="/contact" className="text-danger" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FaAddressBook size={20} className="mr-2" /> &nbsp;Contact Us
              </span>
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src="/constructionbutton.png" alt="Company Logo" style={{ width: '115px', height: 'auto', marginBottom: '10px' }} onMouseOver={e => e.target.style.filter = 'brightness(50%)'} onMouseOut={e => e.target.style.filter = 'brightness(100%)'} />
            </Link>
            <p className="mb-0">© 2024 JJR Construction Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

