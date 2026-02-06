import React, { useState, useEffect } from "react";

const Ahero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
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
                      className="w-auto h-6 sm:h-7"
                      src="/images/logo.png"
                      alt="Logo"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                  Since 2026 • Empowering Developers
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                BOOK<span className="text-blue-400">MARK'D</span>
                <span className="block relative mt-3">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                      Your Ultimate Programming Book Destination
                    </span>
                    <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 blur-xl opacity-70">
                      Your Ultimate Programming Book Destination
                    </span>
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
                We're more than just a bookstore. We're a movement dedicated to
                democratizing programming education and making world-class
                coding resources accessible to everyone.
              </p>

              {/* Core Values */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">
                  Our Core Values:
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium">Accessibility:</span> Making
                    programming education affordable and accessible worldwide
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium">Quality:</span> Curating only
                    the best, most relevant programming books
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium">Community:</span> Building
                    supportive networks of developers and learners
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="font-medium">Innovation:</span>{" "}
                    Continuously updating our collection with the latest
                    technologies
                  </li>
                </ul>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">
                    20+
                  </div>
                  <div className="text-xs text-cyan-300">Programming Books</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">100+</div>
                  <div className="text-xs text-cyan-300">Expert Authors</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">50K+</div>
                  <div className="text-xs text-cyan-300">Developers Served</div>
                </div>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-white mb-1">23</div>
                  <div className="text-xs text-cyan-300">Tech Languages</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#our-mission"
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    <img
                      src="https://img.icons8.com/ios/50/FFFFFF/target--v1.png"
                      alt="Mission"
                      className="w-5 h-5 mr-2"
                    />
                    Our Mission
                  </span>
                </a>

                <a
                  href="#our-vision"
                  className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 flex items-center"
                >
                  <div className="relative mr-2">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-50"></div>
                    <div className="relative bg-cyan-600 p-2 rounded-full">
                      <img
                        src="https://img.icons8.com/ios/50/FFFFFF/binoculars--v1.png"
                        alt="Vision"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                  Our Vision
                </a>

                <a
                  href="#team"
                  className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 flex items-center"
                >
                  <img
                    src="https://img.icons8.com/ios/50/FFFFFF/conference-call.png"
                    alt="Team"
                    className="w-5 h-5 mr-2"
                  />
                  Meet Team
                </a>
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
                  {/* Animated Globe Image */}
                  <div className="absolute -top-4 -right-4 w-32 h-32">
                    <img
                      src="https://img.icons8.com/ios/100/3b82f6/globe--v1.png"
                      alt="Global Reach"
                      className="w-full h-full opacity-70"
                      style={{
                        animation: "spin 30s linear infinite",
                      }}
                    />
                  </div>

                  {/* Company Information Cards */}
                  <div className="space-y-6">
                    {/* Mission Card */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-5 border border-blue-700/30">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/target--v1.png"
                            alt="Mission"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Our Mission
                          </h3>
                          <p className="text-gray-300 text-sm">
                            To provide every aspiring and professional developer
                            with access to high-quality programming resources
                            that accelerate learning and career growth,
                            regardless of their background or location.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-5 border border-cyan-700/30">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/binoculars--v1.png"
                            alt="Vision"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Our Vision
                          </h3>
                          <p className="text-gray-300 text-sm">
                            To become the world's most trusted destination for
                            programming education, where developers from all
                            levels can find the perfect resources to master any
                            technology and achieve their professional goals.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Impact Card */}
                    <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-5 border border-purple-700/30">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/growth--v1.png"
                            alt="Impact"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Our Impact
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">
                                65%
                              </div>
                              <div className="text-xs text-gray-300">
                                Career Growth
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">
                                40%
                              </div>
                              <div className="text-xs text-gray-300">
                                Faster Learning
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">
                                92%
                              </div>
                              <div className="text-xs text-gray-300">
                                Satisfaction
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">
                                120+
                              </div>
                              <div className="text-xs text-gray-300">
                                Countries
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Founder's Quote */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/quote-left.png"
                            alt="Quote"
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-300 italic text-sm">
                          "We started BOOKMARK'D with a simple belief: great
                          programming books shouldn't be a luxury. They should
                          be accessible tools that empower every developer to
                          build amazing things."
                        </p>
                        <div className="mt-3">
                          <div className="text-cyan-300 font-medium">
                            Founder & CEO
                          </div>
                          <div className="text-gray-400 text-sm">
                            BOOKMARK'D Team
                          </div>
                        </div>
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
          href="#story"
          className="group flex flex-col items-center text-cyan-300 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-3 opacity-70 group-hover:opacity-100">
            Explore Our Journey
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
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Ahero;
