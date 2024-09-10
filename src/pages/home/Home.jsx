import React from 'react';
import Layout from '../../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white leading-tight animate-fade-in">
            Unmask the Truth with AI
          </h1>
          <p className="mt-4 text-lg text-gray-200 animate-slide-up">
            Deepfake Detection: Protecting Reality in a Digital World
          </p>
          
          <button className="mt-8 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 hover:from-teal-500 hover:via-blue-500 hover:to-purple-500 text-white py-3 px-8 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-teal-300 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-6xl text-teal-400 mb-4">&#9881;</div>
              <h3 className="text-xl font-medium text-white">Precision AI</h3>
              <p className="mt-2 text-gray-400">Top-notch AI algorithms for high accuracy in deepfake detection.</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-gray-900 p-6 rounded-lg shadow-lg">
             <div className="text-6xl text-teal-400 mb-4">&#128267;</div>
              <h3 className="text-xl font-medium text-white">Instant Results</h3>
              <p className="mt-2 text-gray-400">Receive immediate analysis of your media content.</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300 bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-6xl text-teal-400 mb-4">&#128187;</div>
              <h3 className="text-xl font-medium text-white">User-Friendly</h3>
              <p className="mt-2 text-gray-400">An intuitive interface designed for ease of use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white mb-4">Know More About DeepFakes.</h2>
          <p className="text-gray-400 mb-8">Join thousands of users in securing your media with our powerful tool.</p>
          <button className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 hover:from-teal-500 hover:via-blue-500 hover:to-purple-500 text-white py-3 px-8 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105">
            Know More!
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-teal-300 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-300">
                "An indispensable tool for our media team. Detects deepfakes with amazing accuracy."
              </p>
              <p className="mt-4 text-teal-400">- Media Specialist</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-300">
                "Incredibly user-friendly and effective. It’s changed the way we handle media content."
              </p>
              <p className="mt-4 text-teal-400">- Content Creator</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-300">
                "A must-have for anyone serious about media security. Fast and reliable detection."
              </p>
              <p className="mt-4 text-teal-400">- Digital Security Analyst</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Home;
