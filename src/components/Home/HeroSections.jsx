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
      Java: "bg-red-100",
      Python: "bg-blue-100",
      JavaScript: "bg-yellow-100",
      "C++": "bg-purple-100",
      HTML: "bg-orange-100",
      ".NET": "bg-green-100",
    };
    return colors[tech] || "bg-gray-100";
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
    <div className="relative min-h-screen bg-[#F5F6FA] overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#4F46E5]/10"
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
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4F46E5 1px, transparent 1px),
                              linear-gradient(to bottom, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container px-6 py-16 mx-auto text-center">
          <div
            className={`max-w-3xl mx-auto transform transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl font-bold text-slate-800 lg:text-6xl">
              BOOK<span className="text-[#4F46E5]">MARK'D</span>
            </h1>

            <p className="mt-4 text-2xl font-semibold text-slate-700">
              Your Ultimate Destination for Programming Books
            </p>

            <p className="mt-6 text-lg text-slate-600">
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
            <h2 className="mb-10 text-2xl font-semibold text-slate-800">
              Explore Books by Technology
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {["Java", "Python", "JavaScript", "C++", "HTML", ".NET"].map(
                (tech) => (
                  <button
                    key={tech}
                    onClick={() => handleTechClick(tech)}
                    className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-[#4F46E5]/20 hover:scale-105 hover:border-[#4F46E5] border border-slate-200 group cursor-pointer"
                  >
                    <div
                      className={`p-4 ${getTechColor(tech)} rounded-full group-hover:opacity-80 transition-colors duration-300 shadow-sm`}
                    >
                      <img
                        src={getTechIcon(tech)}
                        alt={tech}
                        className="w-12 h-12"
                      />
                    </div>
                    <span className="mt-4 font-medium text-slate-800">{tech}</span>
                    <span className="mt-1 text-sm text-slate-500">
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
            <div className="p-6 text-center bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F46E5]/20">
              <div className="text-3xl font-bold text-[#4F46E5]">20+</div>
              <div className="mt-2 text-slate-600">Programming Books</div>
            </div>
            <div className="p-6 text-center bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F46E5]/20">
              <div className="text-3xl font-bold text-[#4F46E5]">50+</div>
              <div className="mt-2 text-slate-600">Technologies</div>
            </div>
            <div className="p-6 text-center bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F46E5]/20">
              <div className="text-3xl font-bold text-[#4F46E5]">50+</div>
              <div className="mt-2 text-slate-600">Authors</div>
            </div>
            <div className="p-6 text-center bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4F46E5]/20">
              <div className="text-3xl font-bold text-[#4F46E5]">24/7</div>
              <div className="mt-2 text-slate-600">Support</div>
            </div>
          </div>

          <div
            className={`max-w-2xl mx-auto mt-16 transform transition-all duration-1000 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="p-8 bg-gradient-to-r from-[#4F46E5] to-[#4F46E5]/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white">
                Start Your Learning Journey Today!
              </h3>
              <p className="mt-2 text-indigo-100">
                Get access to all programming books with our premium membership
              </p>
              <div className="mt-6 flex gap-4 justify-center">
                <button className="px-8 py-3 font-medium text-indigo-900 transition-all duration-300 bg-[#FBBF24] rounded-lg hover:bg-[#F59E0B] hover:shadow-xl hover:scale-105 shadow-md">
                  Shop Now
                </button>
                <button className="px-8 py-3 font-medium text-white transition-all duration-300 bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 hover:shadow-xl hover:scale-105">
                  Learn More
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