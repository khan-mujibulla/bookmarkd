import React, { useState, useEffect } from "react";

const Bookhero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      
      <div className="absolute inset-0">
        
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 ${
                mounted
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full">
                    <img
                      src="https://img.icons8.com/ios-filled/50/FFFFFF/books.png"
                      alt="Books Icon"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                  20+ Programming Books
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Master Any
                <span className="block relative mt-3">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                      Technology
                    </span>
                    <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 blur-xl opacity-70">
                      Technology
                    </span>
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
                Explore the world's largest collection of programming books. 
                From beginner guides to advanced references, find the perfect book 
                to level up your coding skills.
              </p>

              {/* Featured Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                  Popular Categories:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Python", "React", "Java", "Data Science", "Web Development", "Mobile Apps", "Cloud Computing"].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-cyan-300 text-sm rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">
                    100+
                  </div>
                  <div className="text-xs text-cyan-300">
                    Technologies
                  </div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-xs text-cyan-300">Expert Authors</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">⭐4.8</div>
                  <div className="text-xs text-cyan-300">
                    Avg. Rating
                  </div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">🆕</div>
                  <div className="text-xs text-cyan-300">Weekly Updates</div>
                </div>
              </div>

              {/* Search and Action Buttons */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png"
                      alt="Search"
                      className="w-5 h-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for books on JavaScript, Python, React..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#all-books"
                    className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      <img
                        src="https://img.icons8.com/ios/50/FFFFFF/bookshelf.png"
                        alt="Browse"
                        className="w-5 h-5 mr-2"
                      />
                      Browse All Books
                    </span>
                  </a>

                  <a
                    href="#featured"
                    className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 flex items-center"
                  >
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/bestseller--v1.png"
                      alt="Featured"
                      className="w-5 h-5 mr-2"
                    />
                    Featured Books
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Visual */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                mounted
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                  {/* Animated Books Image */}
                  <div className="absolute -top-4 -right-4 w-32 h-32">
                    <img
                      src="https://img.icons8.com/ios/100/3b82f6/stack-of-books.png"
                      alt="Book Stack"
                      className="w-full h-full opacity-70"
                      style={{
                        animation: "float 5s ease-in-out infinite",
                      }}
                    />
                  </div>

                  {/* Featured Books */}
                  <div className="space-y-6">
                    {/* Top Rated Book */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-5 border border-blue-700/30">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-16 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/book--v1.png"
                              alt="Book"
                              className="w-8 h-8"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            ⭐ 4.9
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            JavaScript: The Definitive Guide
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            Master modern JavaScript with this comprehensive guide
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-300 font-bold">₹899</span>
                            <span className="text-xs text-gray-400">David Flanagan</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* New Release Book */}
                    <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-5 border border-cyan-700/30">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-16 h-20 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/book--v1.png"
                              alt="Book"
                              className="w-8 h-8"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            NEW
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            Python Data Science Handbook
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            Essential tools for working with data in Python
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-300 font-bold">₹1,199</span>
                            <span className="text-xs text-gray-400">Jake VanderPlas</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Best Seller Book */}
                    <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-5 border border-purple-700/30">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-16 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/book--v1.png"
                              alt="Book"
                              className="w-8 h-8"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-red-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            🔥 HOT
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            React.js: Building Modern Web Apps
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            Learn React from basics to advanced patterns
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-300 font-bold">₹999</span>
                            <span className="text-xs text-gray-400">Alex Banks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Categories */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <h4 className="text-white font-semibold mb-3">Browse by Category:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/javascript.png"
                            alt="JS"
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="text-xs text-cyan-300">JavaScript</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/python.png"
                            alt="Python"
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="text-xs text-cyan-300">Python</span>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/react-native--v1.png"
                            alt="React"
                            className="w-5 h-5"
                          />
                        </div>
                        <span className="text-xs text-cyan-300">React</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#all-books"
          className="group flex flex-col items-center text-cyan-300 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-3 opacity-70 group-hover:opacity-100">
            Explore All Books
          </span>
          <div className="relative">
            <div className="w-10 h-16 border-2 border-cyan-300/30 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cyan-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </a>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 1;
          }
          50% {
            transform: translateY(20px) scaleY(0.5);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0) scaleY(1);
            opacity: 1;
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Bookhero;