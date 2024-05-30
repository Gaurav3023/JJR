import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaThreads } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-danger"><strong>Contact Us</strong></h1>
        <p className="lead">
          We’d love to hear from you! Whether you have a question about our services or want to discuss your project, our team is here to help.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="contact-info-box border border-danger p-4 rounded">
            <ul className="list-unstyled">
              <li className="mb-4 d-flex align-items-center">
                <FaPhone className="me-3" style={{ fontSize: '1.5rem', color: '', flip: true }} />
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
                <a href="https://www.instagram.com/jjr__construction" target="_blank" rel="noopener noreferrer" className="ms-2 fs-5 text-decoration-none" style={{ color: '#FF0000' }}>@jjr__construction</a>
              </li>
              <li className="mb-4 d-flex align-items-center">
                <FaThreads className="me-3" style={{ fontSize: '1.5rem', color: 'black' }} />
                <span className="fs-5"><strong>Threads:</strong></span>
                <a href="https://www.threads.net/@jjr__construction" target="_blank" rel="noopener noreferrer" className="ms-2 fs-5 text-decoration-none" style={{ color: '#FF0000' }}>@jjr__construction</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
