import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from "../components/Card";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  const allBooks = [
    {
      id: 1,
      title: "C# Programming",
      description:
        "Master C# with this comprehensive guide covering .NET Core, ASP.NET, and advanced OOP concepts.",
      price: 899,
      imageUrl: "/images/c.png",
      altText: "C# Programming Book",
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      description:
        "Complete guide to modern JavaScript with ES6+ features, async/await, promises, and real-world projects.",
      price: 799,
      imageUrl: "/images/js.png",
      altText: "JavaScript Book",
    },
    {
      id: 3,
      title: "HTML5 & CSS3",
      description:
        "Learn responsive web design, Flexbox, Grid, animations, and modern CSS techniques.",
      price: 699,
      imageUrl: "/images/html.png",
      altText: "HTML & CSS Book",
    },
    {
      id: 4,
      title: "Python Mastery",
      description:
        "From basics to advanced Python programming. Includes data science, web development, and machine learning.",
      price: 849,
      imageUrl: "/images/pythom.png",
      altText: "Python Programming Book",
    },
    {
      id: 5,
      title: "Pandas Data Analysis",
      description:
        "Complete guide to data manipulation and analysis using Pandas. Real-world datasets.",
      price: 749,
      imageUrl: "/images/Panda.png",
      altText: "Pandas Book",
    },
    {
      id: 6,
      title: "Java Development",
      description:
        "Comprehensive Java guide covering Spring Boot, Hibernate, microservices, and enterprise applications.",
      price: 999,
      imageUrl: "/images/Java.png",
      altText: "Java Programming Book",
    },
    {
      id: 7,
      title: "ASP.NET Core",
      description:
        "Build modern web applications with ASP.NET Core. Covers MVC, Web API, Entity Framework.",
      price: 899,
      imageUrl: "/images/Asp_net.png",
      altText: "ASP.NET Book",
    },
    {
      id: 8,
      title: "React.js Guide",
      description:
        "Complete React.js guide with hooks, context API, Redux, Next.js, and advanced patterns.",
      price: 849,
      imageUrl: "/images/React.png",
      altText: "React.js Book",
    },
    {
      id: 9,
      title: "Node.js Backend",
      description:
        "Master server-side JavaScript with Node.js, Express, MongoDB, REST APIs, and authentication.",
      price: 799,
      imageUrl: "/images/Node_js.png",
      altText: "Node.js Book",
    },
    {
      id: 10,
      title: "C++ Programming",
      description:
        "Comprehensive C++ guide from fundamentals to advanced topics like STL, templates, and memory management.",
      price: 899,
      imageUrl: "/images/C++.png",
      altText: "C++ Programming Book",
    },
    {
      id: 11,
      title: "Data Structures",
      description:
        "Master essential data structures and algorithms with Python/Java implementations.",
      price: 799,
      imageUrl: "/images/DSA.png",
      altText: "Data Structures Book",
    },
    {
      id: 12,
      title: "Database Systems",
      description:
        "Complete guide to database design, SQL queries, normalization, indexing, and working with MySQL.",
      price: 849,
      imageUrl: "/images/DBMS.png",
      altText: "Database Systems Book",
    },
    {
      id: 13,
      title: "SQL Mastery",
      description:
        "From basic queries to advanced SQL features. Includes performance optimization and stored procedures.",
      price: 749,
      imageUrl: "/images/SQL.png",
      altText: "SQL Book",
    },
    {
      id: 14,
      title: "Oracle SQL",
      description:
        "Specialized guide for Oracle Database development. Covers PL/SQL, performance tuning, and administration.",
      price: 1299,
      imageUrl: "/images/OSQL.png",
      altText: "Oracle SQL Book",
    },
    {
      id: 15,
      title: "Django Framework",
      description:
        "Build web applications with Django. Covers models, views, templates, authentication, and REST APIs.",
      price: 849,
      imageUrl: "/images/Djengo.png",
      altText: "Django Book",
    },
    {
      id: 16,
      title: "Data Visualization",
      description:
        "Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning charts and dashboards.",
      price: 699,
      imageUrl: "/images/matplotlip.png",
      altText: "Data Visualization Book",
    },
    {
      id: 17,
      title: "C Programming",
      description:
        "Fundamentals of C programming including pointers, memory management, file handling, and system programming.",
      price: 649,
      imageUrl: "/images/modernc.png",
      altText: "C Programming Book",
    },
    {
      id: 18,
      title: "AI Fundamentals",
      description:
        "Introduction to Artificial Intelligence concepts, algorithms, neural networks, and practical AI applications.",
      price: 1199,
      imageUrl: "/images/ai.png",
      altText: "AI Book",
    },
    {
      id: 19,
      title: "Machine Learning",
      description:
        "Complete ML guide covering supervised/unsupervised learning, deep learning, TensorFlow, and PyTorch.",
      price: 1399,
      imageUrl: "/images/AI_ML.png",
      altText: "Machine Learning Book",
    },
    {
      id: 20,
      title: "Cloud Computing",
      description:
        "Comprehensive guide to AWS, Azure, and Google Cloud. Includes cloud architecture and deployment strategies.",
      price: 1099,
      imageUrl: "/images/cloud.png",
      altText: "Cloud Computing Book",
    },
    {
      id: 21,
      title: "PHP Development",
      description:
        "Modern PHP programming with Laravel framework. Build web applications and REST APIs.",
      price: 799,
      imageUrl: "/images/php.png",
      altText: "PHP Book",
    },
    {
      id: 22,
      title: "Laravel Framework",
      description:
        "Master Laravel PHP framework. Includes Eloquent ORM, authentication, APIs, and testing.",
      price: 899,
      imageUrl: "/images/laravel.png",
      altText: "Laravel Book",
    },
    {
      id: 23,
      title: "Computer Networks",
      description:
        "Comprehensive guide to networking concepts, protocols, security, and administration.",
      price: 999,
      imageUrl: "/images/com_netw.png",
      altText: "Computer Networks Book",
    },
  ];

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q");

    setTimeout(() => {
      if (query) {
        const results = allBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.description.toLowerCase().includes(query.toLowerCase()),
        );
        setSearchResults(results);
      } else {
        setSearchResults(allBooks);
      }
      setLoading(false);
    }, 500);
  }, [location.search]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1F2833] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#94A3B8]">Searching books...</p>
        </div>
      </div>
    );
  }

  const searchQuery = new URLSearchParams(location.search).get("q");

  return (
    <div className="min-h-screen bg-[#1F2833] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#C5C6C7] mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All Books"}
          </h1>
          <p className="text-[#94A3B8] text-lg">
            Found {searchResults.length} book
            {searchResults.length !== 1 ? "s" : ""}
          </p>
        </div>

        {searchResults.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No books found
            </h3>
            <p className="text-[#94A3B8] mb-6">
              Try searching with different keywords
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-8">
              {searchResults.map((book) => (
                <Card
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  description={book.description}
                  price={book.price}
                  imageUrl={book.imageUrl}
                  altText={book.altText}
                />
              ))}
            </div>

          
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
