import React from "react";

const Card = ({ title, description, price, imageUrl, altText }) => {
  return (
    <div className="w-72 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 m-4 overflow-hidden border border-gray-700">
      
      <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
        <img
          className="object-contain w-full h-44"
          src={imageUrl}
          alt={altText}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxRjIxMjUiIHJ4PSIxMCIvPjxwYXRoIGQ9Ik0zMCAzNUMyNy4yNCAzNSAyNSAzMi43NiAyNSAzMEMyNSAyNy4yNCAyNy4yNCAyNSAzMCAyNUMzMi43NiAyNSAzNSAyNy4yNCAzNSAzMEMzNSAzMi43NiAzMi43NiAzNSAzMCAzNVpNNDAgNTBDNDAgNTEuMSAzOS4xIDUyIDM4IDUySDIyQzIwLjkgNTIgMjAgNTEuMSAyMCA1MFY0MkwyNyAzNUw0MCA0Ni41VjUwWiIgZmlsbD0iIzhDQ0NEQiIvPjwvc3ZnPg==";
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6">
        {/* Title and Price Row */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-400">Programming Book</span>
              <span className="mx-2 text-gray-600">•</span>
              <div className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 font-medium rounded-full border border-blue-800/50">
                Best Seller
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-400">₹{price}</div>
            <div className="text-sm text-gray-500 line-through">₹{(price * 1.5).toFixed(0)}</div>
          </div>
        </div>
        
        
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">
          {description}
        </p>
        
        
        <div className="flex items-center mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-400">(4.8/5)</span>
          <span className="mx-2 text-gray-600">•</span>
          <span className="text-sm text-gray-400">420 pages</span>
        </div>
        
        
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Add to Cart
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 border border-gray-600">
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      
      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        33% OFF
      </div>
    </div>
  );
};

// Main Component 
const Cards = () => {
  const courses = [
    {
      id: 1,
      title: "C# Programming",
      description: "Master C# with this comprehensive guide covering .NET Core, ASP.NET, and advanced OOP concepts. Perfect for beginners and intermediate developers.",
      price: 899,
      imageUrl: "/images/c.png",
      altText: "C# Programming Book",
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      description: "Complete guide to modern JavaScript with ES6+ features, async/await, promises, and real-world projects. Includes React and Node.js integration.",
      price: 799,
      imageUrl: "/images/js.png",
      altText: "JavaScript Book",
    },
    {
      id: 3,
      title: "HTML5 & CSS3",
      description: "Learn responsive web design, Flexbox, Grid, animations, and modern CSS techniques. Build beautiful websites from scratch.",
      price: 699,
      imageUrl: "/images/html.png",
      altText: "HTML & CSS Book",
    },
    {
      id: 4,
      title: "Python Mastery",
      description: "From basics to advanced Python programming. Includes data science, web development (Django/Flask), automation, and machine learning basics.",
      price: 849,
      imageUrl: "/images/pythom.png",
      altText: "Python Programming Book",
    },
    {
      id: 5,
      title: "Pandas Data Analysis",
      description: "Complete guide to data manipulation and analysis using Pandas. Real-world datasets, visualization techniques, and data cleaning methods.",
      price: 749,
      imageUrl: "/images/Panda.png",
      altText: "Pandas Book",
    },
    {
      id: 6,
      title: "Java Development",
      description: "Comprehensive Java guide covering Spring Boot, Hibernate, microservices, and enterprise application development patterns.",
      price: 999,
      imageUrl: "/images/Java.png",
      altText: "Java Programming Book",
    },
    {
      id: 7,
      title: "ASP.NET Core",
      description: "Build modern web applications with ASP.NET Core. Covers MVC, Web API, Entity Framework, authentication, and deployment strategies.",
      price: 899,
      imageUrl: "/images/Asp_net.png",
      altText: "ASP.NET Book",
    },
    {
      id: 8,
      title: "React.js Guide",
      description: "Complete React.js guide with hooks, context API, Redux, Next.js, and advanced patterns. Build scalable frontend applications.",
      price: 849,
      imageUrl: "/images/React.png",
      altText: "React.js Book",
    },
    {
      id: 9,
      title: "Node.js Backend",
      description: "Master server-side JavaScript with Node.js, Express, MongoDB, REST APIs, authentication, and real-time applications with Socket.io.",
      price: 799,
      imageUrl: "/images/Node_js.png",
      altText: "Node.js Book",
    },
    {
      id: 10,
      title: "C++ Programming",
      description: "Comprehensive C++ guide from fundamentals to advanced topics like STL, templates, memory management, and game development basics.",
      price: 899,
      imageUrl: "/images/C++.png",
      altText: "C++ Programming Book",
    },
    {
      id: 11,
      title: "Data Structures",
      description: "Master essential data structures and algorithms with Python/Java implementations. Includes LeetCode problems and interview preparation.",
      price: 799,
      imageUrl: "/images/DSA.png",
      altText: "Data Structures Book",
    },
    {
      id: 12,
      title: "Database Systems",
      description: "Complete guide to database design, SQL queries, normalization, indexing, and working with MySQL, PostgreSQL, and MongoDB.",
      price: 849,
      imageUrl: "/images/DBMS.png",
      altText: "Database Systems Book",
    },
    {
      id: 13,
      title: "SQL Mastery",
      description: "From basic queries to advanced SQL features. Includes performance optimization, stored procedures, and real database projects.",
      price: 749,
      imageUrl: "/images/SQL.png",
      altText: "SQL Book",
    },
    {
      id: 14,
      title: "Oracle SQL",
      description: "Specialized guide for Oracle Database development. Covers PL/SQL, performance tuning, administration, and enterprise features.",
      price: 1299,
      imageUrl: "/images/OSQL.png",
      altText: "Oracle SQL Book",
    },
    {
      id: 15,
      title: "Django Framework",
      description: "Build web applications with Django. Covers models, views, templates, authentication, REST APIs, and deployment to production.",
      price: 849,
      imageUrl: "/images/Djengo.png",
      altText: "Django Book",
    },
    {
      id: 16,
      title: "Data Visualization",
      description: "Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning charts, graphs, and dashboards for data analysis.",
      price: 699,
      imageUrl: "/images/matplotlip.png",
      altText: "Data Visualization Book",
    },
    {
      id: 17,
      title: "C Programming",
      description: "Fundamentals of C programming including pointers, memory management, file handling, and system programming concepts.",
      price: 649,
      imageUrl: "/images/modernc.png",
      altText: "C Programming Book",
    },
    {
      id: 18,
      title: "AI Fundamentals",
      description: "Introduction to Artificial Intelligence concepts, algorithms, neural networks, and practical AI applications with Python.",
      price: 1199,
      imageUrl: "/images/ai.png",
      altText: "AI Book",
    },
    {
      id: 19,
      title: "Machine Learning",
      description: "Complete ML guide covering supervised/unsupervised learning, deep learning, TensorFlow, PyTorch, and real-world projects.",
      price: 1399,
      imageUrl: "/images/AI_ML.png",
      altText: "Machine Learning Book",
    },
    {
      id: 20,
      title: "Cloud Computing",
      description: "Comprehensive guide to AWS, Azure, and Google Cloud. Includes cloud architecture, services, security, and deployment strategies.",
      price: 1099,
      imageUrl: "/images/cloud.png",
      altText: "Cloud Computing Book",
    },
    {
      id: 21,
      title: "PHP Development",
      description: "Modern PHP programming with Laravel framework. Build web applications, REST APIs, and learn best practices for PHP development.",
      price: 799,
      imageUrl: "/images/php.png",
      altText: "PHP Book",
    },
    {
      id: 22,
      title: "Laravel Framework",
      description: "Master Laravel PHP framework. Includes Eloquent ORM, authentication, APIs, testing, and building modern web applications.",
      price: 899,
      imageUrl: "/images/laravel.png",
      altText: "Laravel Book",
    },
    {
      id: 23,
      title: "Computer Networks",
      description: "Comprehensive guide to networking concepts, protocols, security, and administration. Practical labs and certification preparation.",
      price: 999,
      imageUrl: "/images/com_netw.png",
      altText: "Computer Networks Book",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Programming Books Store</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Discover the best programming books covering all major technologies and frameworks. 
          From beginner guides to advanced references, we have everything you need for your coding journey.
        </p>
        
        
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">23+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-gray-400">Chapters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-gray-400">Authors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">4.8★</div>
            <div className="text-gray-400">Avg Rating</div>
          </div>
        </div>
      </div>
      
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              imageUrl={course.imageUrl}
              altText={course.altText}
            />
          ))}
        </div>
      </div>
      
      
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-2xl shadow-xl border border-blue-700/50">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="mb-6 text-blue-200">
            Our team of experts can help you select the perfect books for your learning path. 
            Get personalized recommendations based on your skill level and career goals.
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
            Get Free Consultation
          </button>
        </div>
        <p className="mt-8 text-gray-400">
          All books include lifetime access, free updates, and 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
};

export default Cards;