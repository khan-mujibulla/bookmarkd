import React, { useState, useEffect } from "react";

const HeroSections = ({ onSearch }) => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      setTimeout(() => {
        const booksSection = document.getElementById("books-section");
        if (booksSection) {
          booksSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleTechClick = (tech) => {
    onSearch(tech);
    setTimeout(() => {
      const booksSection = document.getElementById("books-section");
      if (booksSection) {
        booksSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const getTechIcon = (tech) => {
    const icons = {
      Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      ".NET": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    };
    return icons[tech] || icons["JavaScript"];
  };

  const getTechColor = (tech) => {
    const colors = {
      Java: "bg-red-900/30",
      Python: "bg-blue-900/30",
      JavaScript: "bg-yellow-900/30",
      "C++": "bg-purple-900/30",
      HTML: "bg-orange-900/30",
      ".NET": "bg-green-900/30",
    };
    return colors[tech] || "bg-gray-900/30";
  };

  const getBookCount = (tech) => {
    const counts = {
      Java: "1,200",
      Python: "1,500",
      JavaScript: "2,000",
      "C++": "800",
      HTML: "900",
      ".NET": "700",
    };
    return counts[tech] || "500";
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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

      <div className="relative z-10">
        <div className="container px-6 py-16 mx-auto text-center">
          <div
            className={`max-w-3xl mx-auto transform transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              BOOK<span className="text-blue-400">MARK'D</span>
            </h1>

            <p className="mt-4 text-2xl font-semibold text-gray-300">
              Your Ultimate Destination for Programming Books
            </p>

            <p className="mt-6 text-lg text-gray-300">
              Discover thousands of programming books, tutorials, and resources
              across all major technologies. From beginner guides to advanced
              references, we have everything for your coding journey.
            </p>

            
          </div>

          <div
            className={`max-w-screen-xl mx-auto mt-20 transform transition-all duration-1000 delay-300 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Explore Books by Technology
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {["Java", "Python", "JavaScript", "C++", "HTML", ".NET"].map(
                (tech) => (
                  <button
                    key={tech}
                    onClick={() => handleTechClick(tech)}
                    className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105 hover:border-blue-500/30 border border-gray-700/50 group cursor-pointer"
                  >
                    <div
                      className={`p-4 ${getTechColor(tech)} rounded-full group-hover:opacity-80 transition-colors duration-300`}
                    >
                      <img
                        src={getTechIcon(tech)}
                        alt={tech}
                        className="w-12 h-12"
                      />
                    </div>
                    <span className="mt-4 font-medium text-white">{tech}</span>
                    <span className="mt-1 text-sm text-gray-400">
                      {getBookCount(tech)}+ Books
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>

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

          <div
            className={`max-w-2xl mx-auto mt-16 transform transition-all duration-1000 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="p-8 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl border border-blue-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                Start Your Learning Journey Today!
              </h3>
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

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSections;