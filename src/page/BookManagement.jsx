// src/components/admin/books/BookManagement.jsx
import React, { useState } from "react";

const BookManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([
    // Frontend Books (5)
    { id: 1, title: "C# Programming", author: "Mark Johnson", price: 899, stock: 15, category: "C#", description: "Master C# with .NET Core, ASP.NET, and advanced OOP concepts. Perfect for beginners and intermediate developers." },
    { id: 2, title: "JavaScript ES6+", author: "Douglas Crockford", price: 799, stock: 45, category: "JavaScript", description: "Complete guide to modern JavaScript with ES6+ features, async/await, promises, and real-world projects." },
    { id: 3, title: "HTML5 & CSS3", author: "Emily Brown", price: 699, stock: 38, category: "HTML/CSS", description: "Learn responsive web design, Flexbox, Grid, animations, and modern CSS techniques." },
    { id: 4, title: "React.js Guide", author: "Jane Doe", price: 849, stock: 28, category: "React", description: "Complete React.js guide with hooks, context API, Redux, Next.js, and advanced patterns." },
    { id: 5, title: "UX Design for Mobile", author: "Sarah Wilson", price: 1099, stock: 22, category: "UX Design", description: "Master mobile UX/UI design with comprehensive coverage of user research, wireframing, prototyping, and usability testing." },
    
    // Backend Books (6)
    { id: 6, title: "Python Mastery", author: "John Smith", price: 849, stock: 32, category: "Python", description: "From basics to advanced Python programming. Includes data science, web development (Django/Flask), automation, and machine learning basics." },
    { id: 7, title: "Java Development", author: "Robert Chen", price: 999, stock: 25, category: "Java", description: "Comprehensive Java guide covering Spring Boot, Hibernate, microservices, and enterprise application development patterns." },
    { id: 8, title: "Node.js Backend", author: "Mike Ross", price: 799, stock: 19, category: "Node.js", description: "Master server-side JavaScript with Node.js, Express, MongoDB, REST APIs, authentication, and real-time applications with Socket.io." },
    { id: 9, title: "C++ Programming", author: "James Wilson", price: 899, stock: 14, category: "C++", description: "Comprehensive C++ guide from fundamentals to advanced topics like STL, templates, memory management, and game development basics." },
    { id: 10, title: "C Programming", author: "David Miller", price: 649, stock: 29, category: "C", description: "Fundamentals of C programming including pointers, memory management, file handling, and system programming concepts." },
    { id: 11, title: "PHP Development", author: "Chris Taylor", price: 799, stock: 21, category: "PHP", description: "Modern PHP programming with Laravel framework. Build web applications, REST APIs, and learn best practices for PHP development." },
    
    // Framework Books (3)
    { id: 12, title: "ASP.NET Core", author: "Patricia Green", price: 899, stock: 16, category: "ASP.NET", description: "Build modern web applications with ASP.NET Core. Covers MVC, Web API, Entity Framework, authentication, and deployment strategies." },
    { id: 13, title: "Django Framework", author: "Emma Davis", price: 849, stock: 23, category: "Django", description: "Build web applications with Django. Covers models, views, templates, authentication, REST APIs, and deployment to production." },
    { id: 14, title: "Laravel Framework", author: "Lisa Wang", price: 899, stock: 11, category: "Laravel", description: "Master Laravel PHP framework. Includes Eloquent ORM, authentication, APIs, testing, and building modern web applications." },
    
    // Database Books (3)
    { id: 15, title: "Database Systems", author: "Steve Jobs", price: 849, stock: 18, category: "Database", description: "Complete guide to database design, SQL queries, normalization, indexing, and working with MySQL, PostgreSQL, and MongoDB." },
    { id: 16, title: "SQL Mastery", author: "Sundar Pichai", price: 749, stock: 42, category: "SQL", description: "From basic queries to advanced SQL features. Includes performance optimization, stored procedures, and real database projects." },
    { id: 17, title: "Oracle SQL", author: "Jeff Bezos", price: 1299, stock: 9, category: "Oracle", description: "Specialized guide for Oracle Database development. Covers PL/SQL, performance tuning, administration, and enterprise features." },
    
    // Data Science Books (4)
    { id: 18, title: "Data Visualization", author: "Satya Nadella", price: 699, stock: 13, category: "Data Visualization", description: "Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning charts, graphs, and dashboards for data analysis." },
    { id: 19, title: "Pandas", author: "Solomon Hykes", price: 749, stock: 8, category: "Pandas", description: "Complete guide to data manipulation and analysis using Pandas. Real-world datasets, visualization techniques, and data cleaning methods." },
    { id: 20, title: "AI Fundamentals", author: "Linus Torvalds", price: 1199, stock: 10, category: "AI", description: "Introduction to Artificial Intelligence concepts, algorithms, neural networks, and practical AI applications with Python." },
    { id: 21, title: "Machine Learning", author: "Andrew Ng", price: 1399, stock: 16, category: "Machine Learning", description: "Complete ML guide covering supervised/unsupervised learning, deep learning, TensorFlow, PyTorch, and real-world projects." },
    
    // Theoretical Books (3)
    { id: 22, title: "Data Structures & Algorithms", author: "Ian Goodfellow", price: 799, stock: 10, category: "DSA", description: "Master essential data structures and algorithms with Python/Java implementations. Includes LeetCode problems and interview preparation." },
    { id: 23, title: "Cloud Computing Technology", author: "Kevin Mitnick", price: 1099, stock: 12, category: "Cloud", description: "Comprehensive guide to AWS, Azure, and Google Cloud. Includes cloud architecture, services, security, and deployment strategies." },
    { id: 24, title: "Computer Networks", author: "Martin Fowler", price: 999, stock: 14, category: "Networks", description: "Comprehensive guide to networking concepts, protocols, security, and administration. Practical labs and certification preparation." }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      // Update existing book
      setBooks(books.map(book => 
        book.id === editingBook.id ? { ...formData, id: book.id, price: Number(formData.price), stock: Number(formData.stock) } : book
      ));
    } else {
      // Add new book with new ID
      const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
      setBooks([...books, { ...formData, id: newId, price: Number(formData.price), stock: Number(formData.stock) }]);
    }
    setShowModal(false);
    setEditingBook(null);
    setFormData({ title: "", author: "", price: "", stock: "", category: "", description: "" });
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData(book);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  // Category options for dropdown - matching the books above
  const categories = [
    "C#", "JavaScript", "HTML/CSS", "React", "UX Design",
    "Python", "Java", "Node.js", "C++", "C", "PHP",
    "ASP.NET", "Django", "Laravel",
    "Database", "SQL", "Oracle",
    "Data Visualization", "Pandas", "AI", "Machine Learning",
    "DSA", "Cloud", "Networks"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Book Management</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your book inventory</p>
          </div>
          <button
            onClick={() => {
              setEditingBook(null);
              setFormData({ title: "", author: "", price: "", stock: "", category: "", description: "" });
              setShowModal(true);
            }}
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
          >
            + Add New Book
          </button>
        </div>

        {/* Stats - Total Books Count */}
        <div className="mb-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-600">Total Books: <span className="text-gray-900 font-bold">{books.length}</span></p>
        </div>

        {/* Books Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">#{book.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{book.title}</div>
                      <div className="text-xs text-gray-500 line-clamp-1">{book.description.substring(0, 50)}...</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{book.author}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">₹{book.price}</td>
                    <td className="px-6 py-4">
                      <span className={book.stock < 10 ? "text-red-600 font-bold" : book.stock < 20 ? "text-amber-600" : "text-green-600"}>
                        {book.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {book.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEdit(book)}
                        className="text-indigo-600 hover:text-indigo-700 mr-3 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingBook ? "Edit Book" : "Add New Book"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Book Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter book title"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author *</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Enter author name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Price"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock *</label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      placeholder="Stock quantity"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter book description"
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 font-medium"
                  >
                    {editingBook ? "Update Book" : "Add Book"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookManagement;