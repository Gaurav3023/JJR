import React, { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';
const Home = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/new.png)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    height: '60vh',
    width: '100%',
  };

  const cardStyles = {
    default: {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    hovered: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const services = [
    { title: 'Stairs', img: 'https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1686932607/content/homeguide/homeguide-flagstone-steps-leading-to-a-home-front-door.jpg' },
    { title: 'Masonry', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauv2c736DAyqAZ8zd9ePGe2M_NMpuGBAzIw&s' },
    { title: 'Bricklaying', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvrVykhG1zKqqrNcApuBFMp0EMzbPP0sMhw&s' },
    { title: 'Waterproofing', img: 'https://www.build-review.com/wp-content/uploads/2021/07/Waterproofing.jpg' },
    { title: 'Snow Removal', img: 'https://myelitelawncare.com/wp-content/uploads/2020/11/Elite-Lawn-Care-161204-145106-2-1500px-1024x683.jpg' },
    { title: 'Concrete', img: 'https://www.thoughtco.com/thmb/gjMsD4xDBy7aIbZsJwLsfhqmvdA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-941748918-5c7f3654c9e77c00012f82f6.jpg' },
    { title: 'Hardscaping', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUbr_8ETjsMBVFcSiBzWCfssMdMMzGsUn8w&s' },
    { title: 'Tuckpoint', img: 'https://res.cloudinary.com/liaison-inc/image/upload/f_auto/q_auto,w_1200/v1654717294/content/homeguide/homeguide-new-tuckpointing-of-a-brick-house-wall-up-close_nz2dh1.jpg' },
    { title: 'Fencing', img: 'https://www.bowerpowerblog.com/wp-content/uploads/2018/07/Chainlink-fence-makeover-wood-panels-DIY-Bower-Power-7-2.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={heroSectionStyle}></div>

      {/* Quote Section */}
      <div className="quote-section py-3 text-center text-white" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="mb-4">Your Dream Property Construction, Starts Here</h1>
          <p className="lead">Get a free quote for top-notch construction services for residential and commercial projects.</p>
          <a href="/contact" className="btn btn-danger btn-lg mt-3" style={{ display: 'inline-flex', alignItems: 'center', padding: '10px' }}>
  <FaAddressBook style={{ marginRight: '5px', fontSize: '20px' }} />
  Contact Us
</a>

        </div>
      </div>

      {/* Services Section */}
      <div className="services-section bg-light py-5">
        <div className="container text-center">
          <h1 className="text-danger mb-4"><strong>Our Services</strong></h1>
          <div className="row">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="col-md-4 mb-4"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="card"
                  style={{
                    ...cardStyles.default,
                    ...(hoveredCard === index ? cardStyles.hovered : {}),
                  }}
                >
                  <img 
                    src={service.img} 
                    className="card-img-top" 
                    alt={service.title} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{service.title}</strong></h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section bg-dark text-white py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to start your next project?</h2>
          <a href="/contact" className="btn btn-danger btn-lg mt-3" style={{ display: 'inline-flex', alignItems: 'center', padding: '10px' }}>
  <FaAddressBook style={{ marginRight: '5px', fontSize: '20px' }} />
  Contact Us Now
</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
