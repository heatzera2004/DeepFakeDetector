import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className="bg-gray-900 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-3xl font-extrabold text-neon-blue-400 tracking-wider">
              AI-Detector
            </div>
            <div className="hidden md:block ml-10 space-x-8">
              <a href="#" className="text-gray-300 hover:text-neon-blue-400 transition-all duration-300">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue-400 transition-all duration-300">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue-400 transition-all duration-300">
                How it Works
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-blue-400 transition-all duration-300">
                About Us
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => navigate('/signin')} className="bg-neon-blue-500 hover:bg-neon-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300">
              Sign In
            </button>
            <button className="border border-neon-blue-500 text-neon-blue-500 hover:bg-neon-blue-500 hover:text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neon-blue-500 transition-all duration-300">
                Home
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neon-blue-500 transition-all duration-300">
                Features
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neon-blue-500 transition-all duration-300">
                How it Works
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-neon-blue-500 transition-all duration-300">
                About Us
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
