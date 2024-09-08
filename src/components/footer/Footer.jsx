import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-neon-blue-400 mb-4">DeepfakeDetector</h3>
            <p className="text-gray-400">
              Your AI-powered solution for detecting deepfake videos and images. Stay safe and aware in the age of AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-neon-blue-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">How it Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-neon-blue-400 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-neon-blue-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 DeepfakeDetector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
