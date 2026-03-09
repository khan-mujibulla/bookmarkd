import React, { useState, useEffect } from "react";

const ContactHero = () => {
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

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-7xl mx-auto">
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
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full">
                      <img
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/speech-bubble.png"
                        alt="Chat Icon"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-cyan-300 uppercase">
                    Premium Support
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  Connect With
                  <span className="block relative mt-3">
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                        Our Experts
                      </span>
                      <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 blur-xl opacity-70">
                        Our Experts
                      </span>
                    </span>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                  Get personalized assistance for all your programming book
                  needs. Our expert team is here to guide you through your
                  learning journey with tailored recommendations and solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-cyan-300 font-medium">
                      Support
                    </div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-2">2h</div>
                    <div className="text-sm text-cyan-300 font-medium">
                      Response Time
                    </div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-2">
                      98%
                    </div>
                    <div className="text-sm text-cyan-300 font-medium">
                      Satisfaction
                    </div>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <div className="text-3xl font-bold text-white mb-2">
                      20+
                    </div>
                    <div className="text-sm text-cyan-300 font-medium">
                      Books
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact-form"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      <img
                        src="https://img.icons8.com/ios/50/FFFFFF/chat--v1.png"
                        alt="Chat"
                        className="w-5 h-5 mr-3"
                      />
                      Start Live Chat
                    </span>
                  </a>

                  <a
                    href="tel:+916351559214"
                    className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 flex items-center"
                  >
                    <div className="relative mr-3">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
                      <div className="relative bg-blue-600 p-2 rounded-full">
                        <img
                          src="https://img.icons8.com/ios/50/FFFFFF/phone--v1.png"
                          alt="Phone"
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    Call Now
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
                  <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                    <div className="absolute -top-4 -right-4 w-32 h-32">
                      <img
                        src="https://img.icons8.com/ios/100/3b82f6/connection-status-on.png"
                        alt="Connection"
                        className="w-full h-full opacity-70"
                        style={{
                          animation: "spin 20s linear infinite",
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="relative mx-auto mb-3">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                          <div className="relative bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/email--v1.png"
                              alt="Email"
                              className="w-8 h-8"
                            />
                          </div>
                        </div>
                        <div className="text-white font-medium">Email</div>
                        <div className="text-sm text-cyan-300">
                          bookmarkd@gmail.com
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="relative mx-auto mb-3">
                          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping delay-150"></div>
                          <div className="relative bg-green-600 w-16 h-16 rounded-full flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/clock--v1.png"
                              alt="Hours"
                              className="w-8 h-8"
                            />
                          </div>
                        </div>
                        <div className="text-white font-medium">Hours</div>
                        <div className="text-sm text-cyan-300">9am-8pm</div>
                      </div>

                      <div className="text-center">
                        <div className="relative mx-auto mb-3">
                          <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping delay-300"></div>
                          <div className="relative bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                            <img
                              src="https://img.icons8.com/ios/50/FFFFFF/conference-call.png"
                              alt="Team"
                              className="w-8 h-8"
                            />
                          </div>
                        </div>
                        <div className="text-white font-medium">Team</div>
                        <div className="text-sm text-cyan-300">
                          Experts Online
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/user-male-circle--v1.png"
                            alt="Agent"
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl rounded-tl-none p-4">
                          <div className="text-white font-medium mb-1">
                            Support Agent
                          </div>
                          <div className="text-gray-300">
                            Hi! How can I help you find the perfect programming
                            book today?
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl rounded-tr-none p-4 max-w-xs">
                          <div className="text-cyan-300 font-medium mb-1">
                            You
                          </div>
                          <div className="text-gray-300">
                            Looking for Python data science books...
                          </div>
                        </div>
                        <div className="bg-cyan-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <img
                            src="https://img.icons8.com/ios/50/FFFFFF/user-male-circle--v1.png"
                            alt="You"
                            className="w-5 h-5"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
                      </div>
                      <span className="text-sm">
                        Support agent is typing...
                      </span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
        transform transition-all duration-1000 delay-500
        ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
        <a
          href="#contact-form"
          className="group flex flex-col items-center text-cyan-300 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-3 opacity-70 group-hover:opacity-100">
            Continue to Contact Form
          </span>
          <div className="relative">
            <div className="w-10 h-16 border-2 border-cyan-300/30 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cyan-400 rounded-full animate-scroll"></div>
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

export default ContactHero;