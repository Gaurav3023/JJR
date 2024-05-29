import React from 'react';

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

  return (
    <div>
      {/* Hero Section */}
      <div style={heroSectionStyle}></div>

      {/* Quote Section */}
      <div className="quote-section py-3 text-center text-white" style={{backgroundColor: 'black'}}> {/* Added style attribute here */}
        <div className="container">
          <h1 className="mb-4">Your Dream Construction Starts Here</h1>
          <p className="lead">Get a free quote for top-notch construction services for residential and commercial projects.</p>
          <a href="/contact" className="btn btn-danger btn-lg mt-3">Contact Us</a>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section bg-light py-5">
        <div className="container text-center">
          <h1 className="text-danger mb-4"><strong>Our Services</strong></h1>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/4449/4449225.png" className="card-img-top" alt="Stairs" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Stairs</strong></h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/7586/7586849.png" className="card-img-top" alt="Masonry" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Masonry</strong></h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/7776/7776713.png" className="card-img-top" alt="Fencing" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Brick Laying</strong></h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/5846/5846702.png" className="card-img-top" alt="Masonry" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Waterproofing</strong></h5>
                </div>
              </div>
            </div>  <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/9295/9295707.png" className="card-img-top" alt="Masonry" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Snow Removal</strong></h5>
                </div>
              </div>
            </div>  <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://cdn-icons-png.flaticon.com/128/14872/14872921.png" className="card-img-top" alt="Masonry" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title"><strong>Fencing</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section bg-dark text-white py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to start your next project?</h2>
          <a href="/contact" className="btn btn-danger btn-lg">Contact Us Today</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
