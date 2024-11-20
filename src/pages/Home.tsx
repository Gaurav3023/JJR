import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';
import { FaTools } from 'react-icons/fa';

function Home() {
  // State for managing the current image index in the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images for the slideshow
  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
  ];

  // Effect to handle the slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Services array
  const services = [
    {
      title: 'Stairs Construction',
      description: 'Custom stair design and construction for both interior and exterior applications.',
      image: 'https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1686932607/content/homeguide/homeguide-flagstone-steps-leading-to-a-home-front-door.jpg',
    },
    {
      title: 'Masonry',
      description: 'Expert masonry services for both residential and commercial properties.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauv2c736DAyqAZ8zd9ePGe2M_NMpuGBAzIw&s',
    },
    {
      title: 'Bricklaying',
      description: 'Professional bricklaying services with attention to detail and precision.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvrVykhG1zKqqrNcApuBFMp0EMzbPP0sMhw&s',
    },
    {
      title: 'Waterproofing',
      description: 'Comprehensive waterproofing solutions for basements and foundations.',
      image: 'https://www.build-review.com/wp-content/uploads/2021/07/Waterproofing.jpg',
    },
    {
      title: 'Snow Removal',
      description: 'Reliable snow removal services for commercial and residential properties.',
      image: 'https://myelitelawncare.com/wp-content/uploads/2020/11/Elite-Lawn-Care-161204-145106-2-1500px-1024x683.jpg',
    },
    {
      title: 'Concrete Work',
      description: 'Specialized concrete services including driveways, patios, and foundations.',
      image: 'https://www.thoughtco.com/thmb/gjMsD4xDBy7aIbZsJwLsfhqmvdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-941748918-5c7f3654c9e77c00012f82f6.jpg',
    },
    {
      title: 'Hardscaping',
      description: 'Beautiful hardscape designs including patios, walkways, and retaining walls.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUbr_8ETjsMBVFcSiBzWCfssMdMMzGsUn8w&s',
    },
    {
      title: 'Tuckpointing',
      description: 'Professional tuckpointing services to restore and maintain masonry structures.',
      image: 'https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1654717294/content/homeguide/homeguide-new-tuckpointing-of-a-brick-house-wall-up-close_nz2dh1.jpg',
    },
    {
      title: 'Fencing',
      description: 'Custom fence installation and repair services for all property types.',
      image: 'https://www.bowerpowerblog.com/wp-content/uploads/2018/07/Chainlink-fence-makeover-wood-panels-DIY-Bower-Power-7-2.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[650px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url("${images[currentIndex]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-white text-center">
            <img
              src="logo.png"
              alt="Logo"
              className="h- mx-auto mb-0" // Adjusted logo size
            />
            <h4 className="text-3xl md:text-5xl font-bold mb-4">
              Your Dream Property Construction, Starts Here
            </h4>

            <Link
              to="/contact"
              className="inline-flex items-center bg-jjr-red text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors duration-200"
            >
              <FaPhoneAlt className="mr-2" /> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaTools className="text-jjr-red text-6xl" />
            </div>
            <h1 className="text-4xl font-bold text-jjr-black mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction and maintenance services with a focus on quality and durability.
              Each service is delivered with expertise and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-jjr-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-jjr-red hover:text-red-800 transition-colors duration-200"
                  >
                    Request Service <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-jjr-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free
            consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-jjr-red text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors duration-200"
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
