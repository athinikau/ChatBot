import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1f71] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://uvuafrica.com/capaciti/wp-content/uploads/2023/09/capaciti-logo-white.png"
                alt="CAPACITI Logo"
                className="h-12"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="hover:text-[#00a5e3] px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="hover:text-[#00a5e3] px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/programs" className="hover:text-[#00a5e3] px-3 py-2 rounded-md text-sm font-medium">
                Programs
              </Link>
              <Link to="/contact" className="hover:text-[#00a5e3] px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <a
                href="#apply"
                className="bg-[#00a5e3] hover:bg-[#0084b5] px-4 py-2 rounded-md text-sm font-medium"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00a5e3] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:text-[#00a5e3] px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-[#00a5e3] px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/programs"
              className="block hover:text-[#00a5e3] px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className="block hover:text-[#00a5e3] px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="#apply"
              className="block bg-[#00a5e3] hover:bg-[#0084b5] px-4 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;