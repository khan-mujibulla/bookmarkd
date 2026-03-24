import React, { useState, useEffect } from "react";

const Abouthero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#818CF8]/20"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, #4F46E5 1px, transparent 1px),
                              linear-gradient(to bottom, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div
              className={`transform transition-all duration-1000 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white p-3 rounded-full">
                    <img
                      className="w-auto h-6 sm:h-7"
                      src="/images/logo.png"
                      alt="Logo"
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-wider text-[#4F46E5] uppercase">
                  Since 2026 • Empowering Developers
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111827] mb-6 leading-tight">
                BOOK<span className="text-[#4F46E5]">MARK'D</span>
                <span className="block relative mt-3">
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#818CF8] to-[#A78BFA]">
                      Your Ultimate Programming Book Destination
                    </span>
                    <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#818CF8] to-[#A78BFA] blur-xl opacity-40">
                      Your Ultimate Programming Book Destination
                    </span>
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#6B7280] mb-6 max-w-2xl leading-relaxed">
                We're more than just a bookstore. We're a movement dedicated to
                democratizing programming education and making world-class
                coding resources accessible to everyone.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#4F46E5] mb-3">
                  Our Core Values:
                </h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4F46E5] rounded-full mr-3"></span>
                    <span className="font-medium">Accessibility:</span> Making
                    programming education affordable and accessible worldwide
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4F46E5] rounded-full mr-3"></span>
                    <span className="font-medium">Quality:</span> Curating only
                    the best, most relevant programming books
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4F46E5] rounded-full mr-3"></span>
                    <span className="font-medium">Community:</span> Building
                    supportive networks of developers and learners
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#4F46E5] rounded-full mr-3"></span>
                    <span className="font-medium">Innovation:</span>{" "}
                    Continuously updating our collection with the latest
                    technologies
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#4F46E5] mb-1">20+</div>
                  <div className="text-xs text-[#6B7280]">Programming Books</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#4F46E5] mb-1">100+</div>
                  <div className="text-xs text-[#6B7280]">Expert Authors</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#4F46E5] mb-1">50K+</div>
                  <div className="text-xs text-[#6B7280]">Developers Served</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-[#4F46E5] mb-1">23</div>
                  <div className="text-xs text-[#6B7280]">Tech Languages</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#our-mission"
                  className="group relative px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F46E5]/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/90 to-[#818CF8]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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
                  className="group px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#4F46E5] font-semibold rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 flex items-center shadow-sm"
                >
                  <div className="relative mr-2">
                    <div className="relative bg-gradient-to-r from-[#4F46E5] to-[#818CF8] p-2 rounded-full">
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
                  className="group px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#4F46E5] font-semibold rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 flex items-center shadow-sm"
                >
                  <img
                    src="https://img.icons8.com/ios/50/4F46E5/conference-call.png"
                    alt="Team"
                    className="w-5 h-5 mr-2"
                  />
                  Meet Team
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
                  <div className="absolute -top-4 -right-4 w-32 h-32">
                    <img
                      src="https://img.icons8.com/ios/100/4F46E5/globe--v1.png"
                      alt="Global Reach"
                      className="w-full h-full opacity-50"
                      style={{
                        animation: "spin 30s linear infinite",
                      }}
                    />
                  </div>

                  <div className="space-y-6">
                    {/* Mission Card */}
                    <div className="bg-gradient-to-br from-[#4F46E5]/10 to-[#818CF8]/10 backdrop-blur-sm rounded-xl p-5 border border-[#4F46E5]/20">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/target--v1.png"
                            alt="Mission"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#111827] mb-2">
                            Our Mission
                          </h3>
                          <p className="text-[#6B7280] text-sm">
                            To provide every aspiring and professional developer
                            with access to high-quality programming resources
                            that accelerate learning and career growth,
                            regardless of their background or location.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#818CF8]/10 to-[#A78BFA]/10 backdrop-blur-sm rounded-xl p-5 border border-[#818CF8]/20">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-[#818CF8] to-[#A78BFA] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/binoculars--v1.png"
                            alt="Vision"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#111827] mb-2">
                            Our Vision
                          </h3>
                          <p className="text-[#6B7280] text-sm">
                            To become the world's most trusted destination for
                            programming education, where developers from all
                            levels can find the perfect resources to master any
                            technology and achieve their professional goals.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#C084FC]/10 backdrop-blur-sm rounded-xl p-5 border border-[#A78BFA]/20">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-br from-[#A78BFA] to-[#C084FC] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/growth--v1.png"
                            alt="Impact"
                            className="w-5 h-5"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#111827] mb-2">
                            Our Impact
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4F46E5]">
                                65%
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                Career Growth
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4F46E5]">
                                40%
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                Faster Learning
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4F46E5]">
                                92%
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                Satisfaction
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#4F46E5]">
                                120+
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                Countries
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-[#4F46E5] to-[#818CF8] w-12 h-12 rounded-full flex items-center justify-center">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/quote-left.png"
                            alt="Quote"
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-[#6B7280] italic text-sm">
                          "We started BOOKMARK'D with a simple belief: great
                          programming books shouldn't be a luxury. They should
                          be accessible tools that empower every developer to
                          build amazing things."
                        </p>
                        <div className="mt-3">
                          <div className="text-[#4F46E5] font-medium">
                            Founder & CEO
                          </div>
                          <div className="text-[#9CA3AF] text-sm">
                            BOOKMARK'D Team
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#4F46E5]/20 to-[#818CF8]/20 rounded-2xl blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#C084FC]/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <a
          href="#story"
          className="group flex flex-col items-center text-[#4F46E5] hover:text-[#4F46E5]/80 transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-3 opacity-70 group-hover:opacity-100">
            Explore Our Journey
          </span>
          <div className="relative">
            <div className="w-10 h-16 border-2 border-[#4F46E5]/30 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-[#4F46E5] rounded-full animate-scroll"></div>
            </div>
          </div>
        </a>
      </div>

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

export default Abouthero;