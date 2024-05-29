import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-5"><strong>Contact Us</strong></h1>
      <ul className="list-unstyled">
        <li className="mb-4 d-flex align-items-center">
          <FaPhone className="me-3" style={{ fontSize: '1.5rem' }} />
          <span className="fs-5">Phone:</span>
          <a href="tel:416-371-0000" className="ms-2 fs-5">416-371-0000</a>
        </li>
        <li className="mb-4 d-flex align-items-center">
          <FaEnvelope className="me-3" style={{ fontSize: '1.5rem' }} />
          <span className="fs-5">Email:</span>
          <a href="mailto:example@example.com" className="ms-2 fs-5">example@example.com</a>
        </li>
        <li className="mb-4 d-flex align-items-center">
          <FaInstagram className="me-3" style={{ fontSize: '1.5rem' }} />
          <span className="fs-5">Instagram:</span>
          <a href="https://www.instagram.com/jjr__construction" className="ms-2 fs-5">@jjr__construction</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
