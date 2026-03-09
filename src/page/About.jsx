import React from "react";
import Abouthero from "../components/Aboutpagehero/Abouthero";

const About = () => {
  return (
    <div>
      <Abouthero />
      <div className="min-h-screen bg-gray-800">
        <div className="bg-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-4 group inline-block">
              About{" "}
              <span className="text-blue-500 relative inline-block">
                BOOKMARK'D
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto group-hover:w-40 transition-all duration-300"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16 group">
          <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
            Our Story
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </h2>
          <div className="relative">
            <p className="text-gray-300 text-lg mb-4 transform hover:translate-x-2 transition-transform duration-300">
              BOOKMARK'D was founded in 2026 with a simple goal: make quality
              programming books accessible to everyone.
            </p>
            <p className="text-gray-300 text-lg transform hover:translate-x-2 transition-transform duration-300">
              What started small has grown into a trusted resource for
              developers worldwide, offering carefully curated books across 23+
              technologies.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 group">
            <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
              Our Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </h2>
            <p className="text-gray-300 text-lg transform hover:scale-105 transition-all duration-300 hover:text-white">
              To help every developer, regardless of experience level, find the
              perfect books to learn, grow, and excel in their coding journey.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-8 relative inline-block group">
            Our Values
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </h2>
          <div className="space-y-6">
            <div className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2 relative inline-block">
                Accessibility
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Quality programming education at affordable prices
              </p>
            </div>

            <div className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2 relative inline-block">
                Quality
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Only the best, most relevant programming books
              </p>
            </div>

            <div className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2 relative inline-block">
                Community
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Building networks of developers helping developers
              </p>
            </div>

            <div className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-2 relative inline-block">
                Innovation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                Always updating with latest technologies
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center relative inline-block w-full group">
              Quick Facts
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-40 transition-all duration-300"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300">
                  23+
                </div>
                <div className="text-gray-300 group-hover:text-white">
                  Technologies
                </div>
              </div>
              <div className="group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300">
                  100+
                </div>
                <div className="text-gray-300 group-hover:text-white">
                  Authors
                </div>
              </div>
              <div className="group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300">
                  50K+
                </div>
                <div className="text-gray-300 group-hover:text-white">
                  Developers
                </div>
              </div>
              <div className="group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 group-hover:text-blue-300">
                  2026
                </div>
                <div className="text-gray-300 group-hover:text-white">
                  Founded
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 text-center group">
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            © 2026 BOOKMARK'D - Programming Books for Everyone
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
