import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/about-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About CAPACITI</h1>
              <p className="text-xl">Empowering Africa's Digital Future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To empower African youth with digital skills, creating pathways to meaningful employment
                and entrepreneurship opportunities in the technology sector.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be Africa's leading digital skills academy, fostering innovation and digital
                transformation across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1f71]">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                CAPACITI was founded with a vision to bridge the digital skills gap in Africa. We
                believe in the power of education to transform lives and communities.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Since our inception, we have trained thousands of students, partnered with leading
                technology companies, and contributed to the growth of Africa's digital economy.
              </p>
              <p className="text-gray-600 text-lg">
                Our programs are designed to provide practical, industry-relevant skills that prepare
                our graduates for successful careers in technology.
              </p>
            </div>
            <div>
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/our-story.jpg"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1a1f71]">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/team-1.jpg"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/team-2.jpg"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Head of Programs</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/team-3.jpg"
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Lead Instructor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;