import { FaPhoneAlt } from 'react-icons/fa'; // Import FaPhoneAlt icon
import { Mail, Instagram } from 'lucide-react';
import { FaThreads } from "react-icons/fa6";

function Contact() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FaPhoneAlt className="text-jjr-red mx-auto mb-4" size={50} /> {/* Added FaPhoneAlt above the heading */}
          <h1 className="text-4xl font-bold text-jjr-black mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for your construction needs. We're here to help
            bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 justify-items-center">
          {/* Contact Information */}
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-jjr-black mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-jjr-red mr-4" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+14163710000"
                      className="text-gray-600 hover:text-jjr-red"
                    >
                      (416) 371-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-jjr-red mr-4" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@jjrconstruction.ca"
                      className="text-gray-600 hover:text-jjr-red"
                    >
                      info@jjrconstruction.ca
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-jjr-red mr-4" size={24} />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/jjr__construction/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-jjr-red"
                    >
                      @jjr__construction
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaThreads className="text-jjr-red mr-4" size={24} />
                  <div>
                    <p className="font-medium">Threads</p>
                    <a
                      href="https://www.threads.net/@jjr__construction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-jjr-red"
                    >
                      @jjr__construction
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-jjr-black mb-6">
                Business Hours
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
