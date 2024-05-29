import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-5"><strong>Contact Us</strong></h1>
      <p className="lead text-center mb-5">
        We’d love to hear from you! Whether you have a question about our services or want to discuss your project, our team is here to help.
      </p>
      <ul className="list-unstyled">
        <li className="mb-4 d-flex align-items-center">
          <FaPhone className="me-3" style={{ fontSize: '1.5rem', color: '', transform: 'scaleX(-1)' }} />
          <span className="fs-5"><strong>Phone:</strong></span>
          <a href="tel:416-371-0000" className="ms-2 fs-5 text-decoration-none" style={{ color: '#FF0000' }}>416-371-0000</a>
        </li>
        <li className="mb-4 d-flex align-items-center">
          <FaEnvelope className="me-3" style={{ fontSize: '1.5rem', color: '#D44638' }} />
          <span className="fs-5"><strong>Email:</strong></span>
          <a href="mailto:example@example.com" className="ms-2 fs-5 text-decoration-none" style={{ color: '#FF0000' }}>example@example.com</a>
        </li>
        <li className="mb-4 d-flex align-items-center">
          <FaInstagram className="me-3" style={{ fontSize: '1.5rem', color: '#C13584' }} />
          <span className="fs-5"><strong>Instagram:</strong></span>
          <a href="https://www.instagram.com/jjr__construction" className="ms-2 fs-5 text-decoration-none" style={{ color: '#FF0000' }}>@jjr__construction</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
