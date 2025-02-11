import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/contact-hero.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl">Get in Touch with CAPACITI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#1a1f71]">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a5e3] focus:ring focus:ring-[#00a5e3] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a5e3] focus:ring focus:ring-[#00a5e3] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a5e3] focus:ring focus:ring-[#00a5e3] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00a5e3] focus:ring focus:ring-[#00a5e3] focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#00a5e3] hover:bg-[#0084b5] px-6 py-2 rounded-md text-white"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#1a1f71]">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-[#00a5e3] w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@uvuafrica.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#00a5e3] w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+27 21 000 0000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#00a5e3] w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Cape Town Office<br />
                      123 Main Street<br />
                      Cape Town, 8001<br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2785767695474!2d18.4241!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzI5LjYiUyAxOMKwMjUnMjYuOCJF!5e0!3m2!1sen!2sza!4v1625136000000!5m2!1sen!2sza"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;