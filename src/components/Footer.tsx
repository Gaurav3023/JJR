import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail } from 'lucide-react';
import { FaHome, FaInfoCircle, FaTools, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-jjr-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JJR Construction Inc.</h3>
            <p className="text-gray-300">
              Building excellence, one project at a time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center text-gray-300 hover:text-jjr-red">
                  <FaHome className="mr-2" size={18} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-jjr-red">
                  <FaInfoCircle className="mr-2" size={18} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-jjr-red">
                  <FaTools className="mr-2" size={18} />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-jjr-red">
                  <FaPhoneAlt className="mr-2" size={18} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a
                href="tel:+14163710000"
                className="flex items-center text-gray-300 hover:text-jjr-red"
              >
                <Phone size={18} className="mr-2" />
                (416) 371-0000
              </a>
              <a
                href="mailto:info@jjrconstruction.ca"
                className="flex items-center text-gray-300 hover:text-jjr-red"
              >
                <Mail size={18} className="mr-2" />
                info@jjrconstruction.ca
              </a>
              <a
                href="https://instagram.com/jjr__construction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-jjr-red"
              >
                <Instagram size={18} className="mr-2" />
                @jjr__construction
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} JJR Construction Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
