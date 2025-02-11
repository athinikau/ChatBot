import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f71] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/capaciti-logo-white.png"
              alt="CAPACITI Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm mt-4">
              CAPACITI is a digital skills development initiative by UVU Africa, focused on empowering
              African youth with the skills needed for the digital economy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#00a5e3] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00a5e3] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#00a5e3] text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00a5e3] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@uvuafrica.com</li>
              <li>Phone: +27 21 000 0000</li>
              <li>Cape Town, South Africa</li>
            </ul>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-[#00a5e3]">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#00a5e3]">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#00a5e3]">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#00a5e3]">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CAPACITI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;