import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/hero-1.jpg")' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Empowering Digital Futures
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    Building Africa's next generation of digital talent
                  </p>
                  <a
                    href="#apply"
                    className="bg-[#00a5e3] hover:bg-[#0084b5] px-8 py-3 rounded-md text-lg font-medium inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a1f71]">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/program-1.jpg"
                alt="Software Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                <p className="text-gray-600 mb-4">
                  Learn to code and build applications with our comprehensive software development program.
                </p>
                <a
                  href="#learn-more"
                  className="text-[#00a5e3] hover:text-[#0084b5] font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/program-2.jpg"
                alt="Data Analytics"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Master data analysis tools and techniques to drive business decisions.
                </p>
                <a
                  href="#learn-more"
                  className="text-[#00a5e3] hover:text-[#0084b5] font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Program Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/program-3.jpg"
                alt="Digital Marketing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Develop skills in digital marketing strategies and social media management.
                </p>
                <a
                  href="#learn-more"
                  className="text-[#00a5e3] hover:text-[#0084b5] font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#1a1f71] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p>Students Trained</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">85%</h3>
              <p>Employment Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Industry Partners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p>Training Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1a1f71]">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join CAPACITI today and transform your career in tech.
          </p>
          <a
            href="#apply"
            className="bg-[#00a5e3] hover:bg-[#0084b5] px-8 py-3 rounded-md text-lg font-medium text-white inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;