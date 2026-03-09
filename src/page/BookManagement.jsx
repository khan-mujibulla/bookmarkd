// src/components/admin/books/BookManagement.jsx
import React, { useState } from "react";

const BookManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState([
    // 1-5: JavaScript aur Python books
    { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 799, stock: 45, category: "JavaScript", description: "Most important JavaScript concepts" },
    { id: 2, title: "Python Mastery", author: "John Smith", price: 849, stock: 32, category: "Python", description: "Complete Python programming guide" },
    { id: 3, title: "React.js Guide", author: "Jane Doe", price: 899, stock: 28, category: "React", description: "Modern React with Hooks" },
    { id: 4, title: "C# Programming", author: "Mark Johnson", price: 799, stock: 15, category: "C#", description: ".NET development with C#" },
    { id: 5, title: "Data Structures", author: "Sarah Wilson", price: 749, stock: 22, category: "DSA", description: "Algorithms and data structures" },
    
    // 6-10: Web Development aur Java
    { id: 6, title: "HTML5 & CSS3", author: "Emily Brown", price: 699, stock: 38, category: "HTML/CSS", description: "Responsive web design" },
    { id: 7, title: "Java Programming", author: "Robert Chen", price: 899, stock: 25, category: "Java", description: "Core Java and advanced concepts" },
    { id: 8, title: "Node.js Backend", author: "Mike Ross", price: 849, stock: 19, category: "Node.js", description: "Server-side JavaScript" },
    { id: 9, title: "MongoDB Database", author: "Lisa Wang", price: 799, stock: 17, category: "Database", description: "NoSQL database design" },
    { id: 10, title: "SQL Mastery", author: "David Miller", price: 749, stock: 29, category: "SQL", description: "Advanced SQL queries" },
    
    // 11-15: Frameworks aur Mobile
    { id: 11, title: "Angular Framework", author: "James Wilson", price: 899, stock: 14, category: "Angular", description: "Enterprise Angular apps" },
    { id: 12, title: "Vue.js Essentials", author: "Emma Davis", price: 799, stock: 21, category: "Vue", description: "Progressive JavaScript framework" },
    { id: 13, title: "Django Web Framework", author: "Chris Taylor", price: 849, stock: 16, category: "Python", description: "Python web development" },
    { id: 14, title: "Flask API Development", author: "Patricia Green", price: 699, stock: 23, category: "Python", description: "Lightweight Python APIs" },
    { id: 15, title: "iOS Development", author: "Steve Jobs", price: 999, stock: 11, category: "Mobile", description: "Swift and iOS SDK" },
    
    // 16-20: Android aur Cloud
    { id: 16, title: "Android Programming", author: "Sundar Pichai", price: 949, stock: 18, category: "Mobile", description: "Kotlin and Android Studio" },
    { id: 17, title: "AWS Cloud Computing", author: "Jeff Bezos", price: 1099, stock: 12, category: "Cloud", description: "Amazon Web Services" },
    { id: 18, title: "Azure Fundamentals", author: "Satya Nadella", price: 999, stock: 9, category: "Cloud", description: "Microsoft Azure cloud" },
    { id: 19, title: "Docker & Kubernetes", author: "Solomon Hykes", price: 899, stock: 14, category: "DevOps", description: "Container orchestration" },
    { id: 20, title: "Git Version Control", author: "Linus Torvalds", price: 599, stock: 42, category: "DevOps", description: "Git and GitHub mastery" },
    
    // 21-24: AI, ML aur Others
    { id: 21, title: "Machine Learning", author: "Andrew Ng", price: 1299, stock: 13, category: "AI/ML", description: "ML algorithms and Python" },
    { id: 22, title: "Deep Learning", author: "Ian Goodfellow", price: 1499, stock: 8, category: "AI/ML", description: "Neural networks and AI" },
    { id: 23, title: "Cybersecurity Basics", author: "Kevin Mitnick", price: 899, stock: 16, category: "Security", description: "Network security and ethical hacking" },
    { id: 24, title: "System Design", author: "Martin Fowler", price: 1199, stock: 10, category: "Architecture", description: "Scalable system architecture" }
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

  // Category options for dropdown
  const categories = [
    "JavaScript", "Python", "React", "C#", "DSA", "HTML/CSS", "Java", 
    "Node.js", "Database", "SQL", "Angular", "Vue", "Mobile", "Cloud", 
    "DevOps", "AI/ML", "Security", "Architecture"
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Book Management</h1>
        <button
          onClick={() => {
            setEditingBook(null);
            setFormData({ title: "", author: "", price: "", stock: "", category: "", description: "" });
            setShowModal(true);
          }}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
        >
          + Add New Book
        </button>
      </div>

      {/* Stats - Total Books Count */}
      <div className="mb-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <p className="text-gray-300">Total Books: <span className="text-white font-bold">{books.length}</span></p>
      </div>

      {/* Books Table */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">#{book.id}</td>
                  <td className="px-6 py-4 text-white">{book.title}</td>
                  <td className="px-6 py-4 text-gray-300">{book.author}</td>
                  <td className="px-6 py-4 text-white">₹{book.price}</td>
                  <td className="px-6 py-4">
                    <span className={book.stock < 10 ? "text-red-400 font-bold" : book.stock < 20 ? "text-yellow-400" : "text-green-400"}>
                      {book.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(book)}
                      className="text-blue-400 hover:text-blue-300 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-red-400 hover:text-red-300"
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingBook ? "Edit Book" : "Add New Book"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Book Title"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Author"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Price (₹)"
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="Stock"
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
              />
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  {editingBook ? "Update Book" : "Add Book"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookManagement;