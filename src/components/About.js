import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-danger p-4 p-sm-5 rounded">
            <div className="text-center mb-4">
              <FaInfoCircle className="mb-3 text-danger" style={{ fontSize: '3rem' }} />
              <h1 className="text-danger"><strong>About Us</strong></h1>
              <p className="lead">
                <strong>Welcome to JJR Construction Inc.</strong>
              </p>
            </div>
            <div className="text-start">
              <h3 className="mb-3">Our Story</h3>
              <p>
                Founded on the principles of integrity, precision, and excellence, JJR Construction Inc. has grown from a small, family-owned business into a trusted name in masonry and bricklaying. Our journey began with a passion for creating beautiful, durable structures and a commitment to our clients' satisfaction.
              </p>
              <h3 className="mt-4 mb-3">Our Expertise</h3>
              <p>
                Specializing in a wide range of masonry services, we bring expertise in bricklaying, stonework, concrete work, and restoration projects. Whether it’s a new construction, a residential renovation, or a commercial project, our team approaches each job with meticulous attention to detail and craftsmanship.
              </p>
              <h3 className="mt-4 mb-3">Our Commitment</h3>
              <p>
                We believe in building not just structures, but lasting relationships with our clients. Our commitment to quality, safety, and customer satisfaction is unwavering. From the initial consultation to the final inspection, we ensure that every aspect of the project meets our high standards and exceeds your expectations.
              </p>
              <h3 className="mt-4 mb-3">Why Choose Us</h3>
              <ul className="list-unstyled">
                <li><strong>Experienced Professionals:</strong> Our team comprises highly trained and experienced masons and bricklayers who are passionate about their craft.</li>
                <li><strong>Quality Workmanship:</strong> We use the finest materials and proven techniques to ensure your project is built to last.</li>
                <li><strong>Customer Focused:</strong> Your vision and needs are our top priority. We work closely with you to bring your ideas to life.</li>
                <li><strong>Reliability:</strong> We understand the importance of deadlines and budget constraints, and we strive to deliver on time and within budget.</li>
                <li><strong>Safety First:</strong> We adhere to the highest safety standards to ensure a secure working environment for our team and peace of mind for our clients.</li>
              </ul>
            </div>
            <div className="text-center mt-4">
              <p>
                At JJR Construction Inc., we are more than just builders; we are artisans dedicated to enhancing the beauty and value of your property. Let us help you bring your masonry dreams to life with precision, quality, and unparalleled service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
