import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState("all");

  useEffect(() => {
    const savedCart = localStorage.getItem("bookCart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === book.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === book.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      } else {
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Books data with categories and ratings
  const allCourses = [
    // Frontend Books
    {
      id: 1,
      title: "C# Programming",
      description:
        "Master C# with this comprehensive guide covering .NET Core, ASP.NET, and advanced OOP concepts. Perfect for beginners and intermediate developers.",
      price: 899,
      imageUrl: "/images/c.png",
      altText: "C# Programming Book",
      category: "frontend",
      rating: 4.5,
      bestSeller: true,
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      description:
        "Complete guide to modern JavaScript with ES6+ features, async/await, promises, and real-world projects. Includes React and Node.js integration.",
      price: 799,
      imageUrl: "/images/js.png",
      altText: "JavaScript Book",
      category: "frontend",
      rating: 4.8,
      bestSeller: true,
    },
    {
      id: 3,
      title: "HTML5 & CSS3",
      description:
        "Learn responsive web design, Flexbox, Grid, animations, and modern CSS techniques. Build beautiful websites from scratch.",
      price: 699,
      imageUrl: "/images/html.png",
      altText: "HTML & CSS Book",
      category: "frontend",
      rating: 4.3,
      bestSeller: true,
    },
    {
      id: 4,
      title: "React.js Guide",
      description:
        "Complete React.js guide with hooks, context API, Redux, Next.js, and advanced patterns. Build scalable frontend applications.",
      price: 849,
      imageUrl: "/images/React.png",
      altText: "React.js Book",
      category: "frontend",
      rating: 4.9,
      bestSeller: true,
    },
    {
      id: 5,
      title: "UX Design for Mobile",
      description:
        "Master mobile UX/UI design with comprehensive coverage of user research, wireframing, prototyping, and usability testing.",
      price: 1099,
      imageUrl: "/images/Ui.png",
      altText: "UX Design for Mobile Book",
      category: "frontend",
      rating: 4.2,
    },

    // Backend Books
    {
      id: 6,
      title: "Python Mastery",
      description:
        "From basics to advanced Python programming. Includes data science, web development (Django/Flask), automation, and machine learning basics.",
      price: 849,
      imageUrl: "/images/pythom.png",
      altText: "Python Programming Book",
      category: "backend",
      rating: 4.7,
    },
    {
      id: 7,
      title: "Java Development",
      description:
        "Comprehensive Java guide covering Spring Boot, Hibernate, microservices, and enterprise application development patterns.",
      price: 999,
      imageUrl: "/images/Java.png",
      altText: "Java Programming Book",
      category: "backend",
      rating: 4.4,
    },
    {
      id: 8,
      title: "Node.js Backend",
      description:
        "Master server-side JavaScript with Node.js, Express, MongoDB, REST APIs, authentication, and real-time applications with Socket.io.",
      price: 799,
      imageUrl: "/images/Node_js.png",
      altText: "Node.js Book",
      category: "backend",
      rating: 4.6,
    },
    {
      id: 9,
      title: "C++ Programming",
      description:
        "Comprehensive C++ guide from fundamentals to advanced topics like STL, templates, memory management, and game development basics.",
      price: 899,
      imageUrl: "/images/C++.png",
      altText: "C++ Programming Book",
      category: "backend",
      rating: 4.3,
    },
    {
      id: 10,
      title: "C Programming",
      description:
        "Fundamentals of C programming including pointers, memory management, file handling, and system programming concepts.",
      price: 649,
      imageUrl: "/images/modernc.png",
      altText: "C Programming Book",
      category: "backend",
      rating: 4.1,
    },
    {
      id: 11,
      title: "PHP Development",
      description:
        "Modern PHP programming with Laravel framework. Build web applications, REST APIs, and learn best practices for PHP development.",
      price: 799,
      imageUrl: "/images/php.png",
      altText: "PHP Book",
      category: "backend",
      rating: 4.0,
    },

    // Framework Books
    {
      id: 12,
      title: "ASP.NET Core",
      description:
        "Build modern web applications with ASP.NET Core. Covers MVC, Web API, Entity Framework, authentication, and deployment strategies.",
      price: 899,
      imageUrl: "/images/Asp_net.png",
      altText: "ASP.NET Book",
      category: "framework",
      rating: 4.5,
    },
    {
      id: 13,
      title: "Django Framework",
      description:
        "Build web applications with Django. Covers models, views, templates, authentication, REST APIs, and deployment to production.",
      price: 849,
      imageUrl: "/images/Djengo.png",
      altText: "Django Book",
      category: "framework",
      rating: 4.7,
    },
    {
      id: 14,
      title: "Laravel Framework",
      description:
        "Master Laravel PHP framework. Includes Eloquent ORM, authentication, APIs, testing, and building modern web applications.",
      price: 899,
      imageUrl: "/images/laravel.png",
      altText: "Laravel Book",
      category: "framework",
      rating: 4.4,
    },

    // Database Books
    {
      id: 15,
      title: "Database Systems",
      description:
        "Complete guide to database design, SQL queries, normalization, indexing, and working with MySQL, PostgreSQL, and MongoDB.",
      price: 849,
      imageUrl: "/images/DBMS.png",
      altText: "Database Systems Book",
      category: "database",
      rating: 4.3,
    },
    {
      id: 16,
      title: "SQL Mastery",
      description:
        "From basic queries to advanced SQL features. Includes performance optimization, stored procedures, and real database projects.",
      price: 749,
      imageUrl: "/images/SQL.png",
      altText: "SQL Book",
      category: "database",
      rating: 4.2,
    },
    {
      id: 17,
      title: "Oracle SQL",
      description:
        "Specialized guide for Oracle Database development. Covers PL/SQL, performance tuning, administration, and enterprise features.",
      price: 1299,
      imageUrl: "/images/OSQL.png",
      altText: "Oracle SQL Book",
      category: "database",
      rating: 4.6,
    },

    // Data Science & Visualization Books (New Section)
    {
      id: 18,
      title: "Data Visualization",
      description:
        "Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning charts, graphs, and dashboards for data analysis.",
      price: 699,
      imageUrl: "/images/matplotlip.png",
      altText: "Data Visualization Book",
      category: "datascience",
      rating: 4.1,
    },
    {
      id: 19,
      title: "Pandas",
      description:
        "Complete guide to data manipulation and analysis using Pandas. Real-world datasets, visualization techniques, and data cleaning methods.",
      price: 749,
      imageUrl: "/images/Panda.png",
      altText: "Pandas Book",
      category: "datascience",
      rating: 4.5,
    },
    {
      id: 20,
      title: "AI Fundamentals",
      description:
        "Introduction to Artificial Intelligence concepts, algorithms, neural networks, and practical AI applications with Python.",
      price: 1199,
      imageUrl: "/images/ai.png",
      altText: "AI Book",
      category: "datascience",
      rating: 4.7,
    },
    {
      id: 21,
      title: "Machine Learning",
      description:
        "Complete ML guide covering supervised/unsupervised learning, deep learning, TensorFlow, PyTorch, and real-world projects.",
      price: 1399,
      imageUrl: "/images/AI_ML.png",
      altText: "Machine Learning Book",
      category: "datascience",
      rating: 4.9,
    },

    // Theoretical Books
    {
      id: 22,
      title: "Data Structures & Algorithms",
      description:
        "Master essential data structures and algorithms with Python/Java implementations. Includes LeetCode problems and interview preparation.",
      price: 799,
      imageUrl: "/images/DSA.png",
      altText: "Data Structures Book",
      category: "theoretical",
      rating: 4.8,
    },
    {
      id: 23,
      title: "Cloud Computing Technology",
      description:
        "Comprehensive guide to AWS, Azure, and Google Cloud. Includes cloud architecture, services, security, and deployment strategies.",
      price: 1099,
      imageUrl: "/images/cloud.png",
      altText: "Cloud Computing Book",
      category: "theoretical",
      rating: 4.4,
    },
    {
      id: 24,
      title: "Computer Networks",
      description:
        "Comprehensive guide to networking concepts, protocols, security, and administration. Practical labs and certification preparation.",
      price: 999,
      imageUrl: "/images/com_netw.png",
      altText: "Computer Networks Book",
      category: "theoretical",
      rating: 4.2,
    },
  ];

  // Filter courses based on active section
  const filteredCourses =
    activeSection === "all"
      ? allCourses
      : allCourses.filter((course) => course.category === activeSection);

  // Group courses by category
  const frontendBooks = allCourses.filter(
    (book) => book.category === "frontend",
  );
  const backendBooks = allCourses.filter((book) => book.category === "backend");
  const frameworkBooks = allCourses.filter(
    (book) => book.category === "framework",
  );
  const databaseBooks = allCourses.filter(
    (book) => book.category === "database",
  );
  const datascienceBooks = allCourses.filter(
    (book) => book.category === "datascience",
  );
  const theoreticalBooks = allCourses.filter(
    (book) => book.category === "theoretical",
  );

  const styleTag = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.4s ease forwards;
    }
    
    .animate-slideUp {
      animation: slideUp 0.5s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
    }
    
    .animate-scaleIn {
      animation: scaleIn 0.3s ease forwards;
    }
    
    .hover-lift {
      transition: transform 0.2s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-3px);
    }
    
    .section-title {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #22D3EE;
      display: inline-block;
    }
    
    .active-tab {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      transform: scale(1.05);
    }
  `;

  const renderBooksGrid = (books, sectionTitle) => {
    if (books.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="section-title text-4xl font-bold mb-6">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => {
            const showBestSeller = book.bestSeller && index < 4;

            return (
              <div
                key={book.id}
                className="hover-lift animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card
                  id={book.id}
                  title={book.title}
                  description={book.description}
                  price={book.price}
                  imageUrl={book.imageUrl}
                  altText={book.altText}
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  rating={book.rating}
                  bestSeller={showBestSeller}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#2D4059] px-4 py-8">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
          Programming Books Store
        </h1>
        <p className="text-white text-lg max-w-3xl mx-auto animate-fadeIn">
          Discover the best programming books covering all major technologies
          and frameworks. From beginner guides to advanced references, we have
          everything you need for your coding journey.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={() => handleSectionChange("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "all"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            All Books ({allCourses.length})
          </button>
          <button
            onClick={() => handleSectionChange("frontend")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "frontend"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Frontend ({frontendBooks.length})
          </button>
          <button
            onClick={() => handleSectionChange("backend")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "backend"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Backend ({backendBooks.length})
          </button>
          <button
            onClick={() => handleSectionChange("framework")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "framework"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Framework ({frameworkBooks.length})
          </button>
          <button
            onClick={() => handleSectionChange("database")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "database"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Database ({databaseBooks.length})
          </button>
          <button
            onClick={() => handleSectionChange("datascience")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "datascience"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Data Science ({datascienceBooks.length})
          </button>
          <button
            onClick={() => handleSectionChange("theoretical")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeSection === "theoretical"
                ? "active-tab bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                : "bg-[#1E293B] text-white hover:bg-[#2D3748]"
            }`}
          >
            Theoretical ({theoreticalBooks.length})
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="text-center animate-scaleIn">
            <div className="text-3xl font-bold text-[#22D3EE]">20+</div>
            <div className="text-[#94A3B8]">Technologies</div>
          </div>
          <div
            className="text-center animate-scaleIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-3xl font-bold text-[#22D3EE]">500+</div>
            <div className="text-[#94A3B8]">Chapters</div>
          </div>
          <div
            className="text-center animate-scaleIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-3xl font-bold text-[#22D3EE]">4★</div>
            <div className="text-[#94A3B8]">Avg Rating</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mb-6 p-4 bg-[#1E293B] rounded-lg border border-blue-500 animate-slideUp">
            <div className="flex justify-between items-center">
              <span className="text-white">
                🛒{" "}
                {cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}{" "}
                books in cart
              </span>
              <a
                href="/AddtoCart"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
              >
                View Cart
              </a>
            </div>
          </div>
        )}

        {/* Books Grid by Sections */}
        {activeSection === "all" ? (
          <>
            {renderBooksGrid(frontendBooks, "🎨 Frontend Development")}
            {renderBooksGrid(backendBooks, "⚙️ Backend Development")}
            {renderBooksGrid(frameworkBooks, "🚀 Frameworks")}
            {renderBooksGrid(databaseBooks, "🗄️ Database Systems")}
            {renderBooksGrid(
              datascienceBooks,
              "📊 Data Science & Visualization",
            )}
            {renderBooksGrid(
              theoreticalBooks,
              "📚 Theoretical Computer Science",
            )}
          </>
        ) : (
          <div className="mb-12">
            <h2 className="section-title text-4xl font-bold mb-6">
              {activeSection === "frontend"
                ? "🎨 Frontend Development"
                : activeSection === "backend"
                  ? "⚙️ Backend Development"
                  : activeSection === "framework"
                    ? "🚀 Frameworks"
                    : activeSection === "database"
                      ? "🗄️ Database Systems"
                      : activeSection === "datascience"
                        ? "📊 Data Science & Visualization"
                        : "📚 Theoretical Computer Science"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((book, index) => {
                const showBestSeller = book.bestSeller && index < 4;

                return (
                  <div
                    key={book.id}
                    className="hover-lift animate-slideUp"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Card
                      id={book.id}
                      title={book.title}
                      description={book.description}
                      price={book.price}
                      imageUrl={book.imageUrl}
                      altText={book.altText}
                      cartItems={cartItems}
                      onAddToCart={handleAddToCart}
                      rating={book.rating}
                      bestSeller={showBestSeller}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-[#94A3B8] text-sm">
            Total {allCourses.length} programming books available across 6
            categories
          </p>
        </div>
      </div>

      <style>{styleTag}</style>
    </div>
  );
};

export default Cards;
