import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaHome, FaInfoCircle, FaTools, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome size={20} /> },
    { path: '/services', label: 'Services', icon: <FaTools size={20} /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle size={20} /> },
    { path: '/contact', label: 'Contact', icon: <FaPhoneAlt size={20} /> },
  ];

  return (
    <nav className="bg-jjr-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="JJR Construction Inc." className="h-20" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-jjr-red font-bold'
                      : 'text-white hover:text-jjr-red'
                  } transition-colors duration-200 flex items-center space-x-2`}
                >
                  {link.icon} {/* Displaying the icon */}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-jjr-red"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-jjr-red font-bold'
                    : 'text-white hover:text-jjr-red'
                } block px-3 py-2 text-base flex items-center space-x-2`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon} {/* Displaying the icon */}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
