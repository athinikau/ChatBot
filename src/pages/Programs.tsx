import React from 'react';

const Programs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/programs-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
              <p className="text-xl">Comprehensive Digital Skills Training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Software Development */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">Software Development</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our comprehensive software development program equips you with the skills needed to
                  become a full-stack developer. Learn programming languages, frameworks, and best
                  practices used in the industry.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Front-end Development (HTML, CSS, JavaScript)</li>
                  <li>Back-end Development (Node.js, Python)</li>
                  <li>Database Management</li>
                  <li>Version Control with Git</li>
                  <li>Agile Development Methodologies</li>
                </ul>
                <a
                  href="#apply"
                  className="bg-[#00a5e3] hover:bg-[#0084b5] px-6 py-2 rounded-md text-white inline-block"
                >
                  Apply Now
                </a>
              </div>
              <div>
                <img
                  src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/software-dev.jpg"
                  alt="Software Development"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/data-analytics.jpg"
                  alt="Data Analytics"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">Data Analytics</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Learn to analyze data and derive meaningful insights using industry-standard tools
                  and techniques. Our program covers everything from basic statistics to advanced
                  analytics.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Data Analysis with Python</li>
                  <li>SQL and Database Management</li>
                  <li>Data Visualization</li>
                  <li>Statistical Analysis</li>
                  <li>Business Intelligence Tools</li>
                </ul>
                <a
                  href="#apply"
                  className="bg-[#00a5e3] hover:bg-[#0084b5] px-6 py-2 rounded-md text-white inline-block"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#1a1f71]">Digital Marketing</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Master the art of digital marketing with our comprehensive program. Learn to create
                  and execute effective digital marketing strategies across various platforms.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Social Media Marketing</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Analytics and Performance Tracking</li>
                </ul>
                <a
                  href="#apply"
                  className="bg-[#00a5e3] hover:bg-[#0084b5] px-6 py-2 rounded-md text-white inline-block"
                >
                  Apply Now
                </a>
              </div>
              <div>
                <img
                  src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/digital-marketing.jpg"
                  alt="Digital Marketing"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;