import {FaInfoCircle} from 'react-icons/fa';

function About() {
  const team = [
    {
      name: 'Julian',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    },
    {
      name: 'Jose',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    },
    {
      name: 'Michael Brown',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-jjr-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaInfoCircle className="text-jjr-red mx-auto mb-4" size={80} /> {/* Added FaPhoneAlt icon above the heading */}
            <h1 className="text-4xl font-bold mb-4">About JJR Construction Inc.</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building excellence through innovation, quality, and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-jjr-black mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded on the principles of integrity, precision, and excellence, JJR Construction Inc. 
                has grown from a small, family-owned business into a trusted name in masonry and bricklaying. 
                Our journey began with a passion for creating beautiful, durable structures and a commitment 
                to our clients' satisfaction.
              </p>
              <h2 className="text-3xl font-bold text-jjr-black mb-4">Our Expertise</h2>
              <p className="text-gray-600 mb-4">
                Specializing in a wide range of masonry services, we bring expertise in bricklaying, stonework, 
                concrete work, and restoration projects. Whether it’s a new construction, a residential renovation, 
                or a commercial project, our team approaches each job with meticulous attention to detail and craftsmanship.
              </p>
              <h2 className="text-3xl font-bold text-jjr-black mb-4">Our Commitment</h2>
              <p className="text-gray-600 mb-4">
                We believe in building not just structures, but lasting relationships with our clients. Our commitment 
                to quality, safety, and customer satisfaction is unwavering. From the initial consultation to the final 
                inspection, we ensure that every aspect of the project meets our high standards and exceeds your expectations.
              </p>
            </div>
            <div>
              <img
                src="https://santorotileandmasonry.com/wp-content/uploads/2022/03/bricklaying-1.jpg"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-jjr-black text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Experienced Professionals',
                description:
                  'Our team comprises highly trained and experienced masons and bricklayers who are passionate about their craft.',
              },
              {
                title: 'Quality Workmanship',
                description:
                  'We use the finest materials and proven techniques to ensure your project is built to last.',
              },
              {
                title: 'Customer Focused',
                description:
                  'Your vision and needs are our top priority. We work closely with you to bring your ideas to life.',
              },
              {
                title: 'Reliability',
                description:
                  'We understand the importance of deadlines and budget constraints, and we strive to deliver on time and within budget.',
              },
              {
                title: 'Safety First',
                description:
                  'We adhere to the highest safety standards to ensure a secure working environment for our team and peace of mind for our clients.',
              },
              {
                title: 'Sustainable Practices',
                description:
                  'We are committed to sustainable building practices, ensuring our projects have a minimal environmental impact while delivering lasting results.',
              },
            ].map((reason, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-jjr-black mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-jjr-black text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-jjr-black mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
