import React, { useState, useEffect } from "react";

const HeroSections = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
        <div className="container px-6 py-16 mx-auto text-center">
          {/* Hero Content with Animation */}
          <div 
            className={`max-w-3xl mx-auto transform transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              Code<span className="text-blue-400">Book</span> Store
            </h1>
            
            <p className="mt-4 text-2xl font-semibold text-gray-300">
              Your Ultimate Destination for Programming Books
            </p>

            <p className="mt-6 text-lg text-gray-300">
              Discover thousands of programming books, tutorials, and resources across all major technologies. 
              From beginner guides to advanced references, we have everything for your coding journey.
            </p>

            {/* Search Form */}
            <div className="w-full max-w-md mx-auto mt-8">
              <form className="flex flex-col md:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Search for books on Java, Python, React..." 
                  className="flex-1 h-12 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300 hover:border-gray-600" 
                />
                <button 
                  type="submit" 
                  className="h-12 px-8 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Search Books
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-400">
                Browse by technology: Java, Python, JavaScript, C++, .NET, React, and more
              </p>
            </div>
          </div>

          {/* Technology Grid with Animation */}
          <div 
            className={`max-w-screen-xl mx-auto mt-20 transform transition-all duration-1000 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Explore Books by Technology
            </h2>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {/* Java */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-red-900/30 rounded-full group-hover:bg-red-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                    alt="Java" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">Java</span>
                <span className="mt-1 text-sm text-gray-400">1,200+ Books</span>
              </div>

              {/* Python */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-blue-900/30 rounded-full group-hover:bg-blue-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">Python</span>
                <span className="mt-1 text-sm text-gray-400">1,500+ Books</span>
              </div>

              {/* JavaScript */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-yellow-900/30 rounded-full group-hover:bg-yellow-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                    alt="JavaScript" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">JavaScript</span>
                <span className="mt-1 text-sm text-gray-400">2,000+ Books</span>
              </div>

              {/* C++ */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-purple-900/30 rounded-full group-hover:bg-purple-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                    alt="C++" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">C++</span>
                <span className="mt-1 text-sm text-gray-400">800+ Books</span>
              </div>

              {/* HTML/CSS */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-orange-900/30 rounded-full group-hover:bg-orange-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                    alt="HTML5" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">HTML/CSS</span>
                <span className="mt-1 text-sm text-gray-400">900+ Books</span>
              </div>

              {/* .NET */}
              <div className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group">
                <div className="p-4 bg-green-900/30 rounded-full group-hover:bg-green-900/40 transition-colors duration-300">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" 
                    alt=".NET" 
                    className="w-12 h-12"
                  />
                </div>
                <span className="mt-4 font-medium text-white">.NET</span>
                <span className="mt-1 text-sm text-gray-400">700+ Books</span>
              </div>
            </div>
          </div>

          {/* Stats Section with Animation */}
          <div 
            className={`grid max-w-4xl grid-cols-2 gap-10 mx-auto mt-16 md:grid-cols-4 transform transition-all duration-1000 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="p-6 text-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="mt-2 text-gray-300">Programming Books</div>
            </div>
            <div className="p-6 text-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="mt-2 text-gray-300">Technologies</div>
            </div>
            <div className="p-6 text-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="mt-2 text-gray-300">Authors</div>
            </div>
            <div className="p-6 text-center bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="mt-2 text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA Section with Animation */}
          <div 
            className={`max-w-2xl mx-auto mt-16 transform transition-all duration-1000 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="p-8 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">Start Your Learning Journey Today!</h3>
              <p className="mt-2 text-blue-100">
                Get access to all programming books with our premium membership
              </p>
              <div className="mt-6">
                <button className="px-8 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:scale-105">
                  Explore Knowledge for Future
                </button>
              </div>
            </div>
          </div>
        </div>
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

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSections;