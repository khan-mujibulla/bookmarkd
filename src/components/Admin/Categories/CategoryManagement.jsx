// src/components/admin/categories/CategoryManagement.jsx
import React, { useState, useEffect } from "react";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Frontend", books: 5, status: "active", description: "Frontend development books including HTML, CSS, JavaScript, React" },
    { id: 2, name: "Backend", books: 6, status: "active", description: "Backend development books including Python, Java, Node.js, PHP" },
    { id: 3, name: "Framework", books: 3, status: "active", description: "Framework books including ASP.NET, Django, Laravel" },
    { id: 4, name: "Database", books: 3, status: "active", description: "Database systems books including SQL, Oracle, MongoDB" },
    { id: 5, name: "Data Science", books: 4, status: "active", description: "Data Science & Visualization books" },
    { id: 6, name: "Theoretical", books: 3, status: "active", description: "Theoretical computer science books" }
  ]);

  const [books, setBooks] = useState([]);
  const [showBookModal, setShowBookModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bookForm, setBookForm] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
    rating: "4.5",
    bestSeller: false,
    author: "Various Authors",
    pages: "300"
  });
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    status: "active"
  });

  // Load books from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem("allBooks");
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      // Initialize with default books
      const defaultBooks = getDefaultBooks();
      setBooks(defaultBooks);
      localStorage.setItem("allBooks", JSON.stringify(defaultBooks));
    }
  }, []);

  // Save books to localStorage whenever they change
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("allBooks", JSON.stringify(books));
    }
  }, [books]);

  const getDefaultBooks = () => {
    return [
      // Frontend Books
      { id: 1, title: "C# Programming", description: "Master C# with this comprehensive guide covering .NET Core, ASP.NET, and advanced OOP concepts.", price: 899, imageUrl: "/images/c.png", category: "Frontend", rating: 4.5, bestSeller: true, author: "Various Authors", pages: "450" },
      { id: 2, title: "JavaScript ES6+", description: "Complete guide to modern JavaScript with ES6+ features, async/await, promises, and real-world projects.", price: 799, imageUrl: "/images/js.png", category: "Frontend", rating: 4.8, bestSeller: true, author: "Various Authors", pages: "380" },
      { id: 3, title: "HTML5 & CSS3", description: "Learn responsive web design, Flexbox, Grid, animations, and modern CSS techniques.", price: 699, imageUrl: "/images/html.png", category: "Frontend", rating: 4.3, bestSeller: true, author: "Various Authors", pages: "320" },
      { id: 4, title: "React.js Guide", description: "Complete React.js guide with hooks, context API, Redux, Next.js, and advanced patterns.", price: 849, imageUrl: "/images/React.png", category: "Frontend", rating: 4.9, bestSeller: true, author: "Various Authors", pages: "520" },
      { id: 5, title: "UX Design for Mobile", description: "Master mobile UX/UI design with comprehensive coverage of user research, wireframing, prototyping.", price: 1099, imageUrl: "/images/Ui.png", category: "Frontend", rating: 4.2, bestSeller: false, author: "Various Authors", pages: "280" },
      
      // Backend Books
      { id: 6, title: "Python Mastery", description: "From basics to advanced Python programming. Includes data science, web development, automation.", price: 849, imageUrl: "/images/pythom.png", category: "Backend", rating: 4.7, bestSeller: false, author: "Various Authors", pages: "420" },
      { id: 7, title: "Java Development", description: "Comprehensive Java guide covering Spring Boot, Hibernate, microservices, and enterprise applications.", price: 999, imageUrl: "/images/Java.png", category: "Backend", rating: 4.4, bestSeller: false, author: "Various Authors", pages: "580" },
      { id: 8, title: "Node.js Backend", description: "Master server-side JavaScript with Node.js, Express, MongoDB, REST APIs, authentication.", price: 799, imageUrl: "/images/Node_js.png", category: "Backend", rating: 4.6, bestSeller: false, author: "Various Authors", pages: "390" },
      { id: 9, title: "C++ Programming", description: "Comprehensive C++ guide from fundamentals to advanced topics like STL, templates, memory management.", price: 899, imageUrl: "/images/C++.png", category: "Backend", rating: 4.3, bestSeller: false, author: "Various Authors", pages: "480" },
      { id: 10, title: "C Programming", description: "Fundamentals of C programming including pointers, memory management, file handling.", price: 649, imageUrl: "/images/modernc.png", category: "Backend", rating: 4.1, bestSeller: false, author: "Various Authors", pages: "340" },
      { id: 11, title: "PHP Development", description: "Modern PHP programming with Laravel framework. Build web applications, REST APIs.", price: 799, imageUrl: "/images/php.png", category: "Backend", rating: 4.0, bestSeller: false, author: "Various Authors", pages: "360" },
      
      // Framework Books
      { id: 12, title: "ASP.NET Core", description: "Build modern web applications with ASP.NET Core. Covers MVC, Web API, Entity Framework.", price: 899, imageUrl: "/images/Asp_net.png", category: "Framework", rating: 4.5, bestSeller: false, author: "Various Authors", pages: "520" },
      { id: 13, title: "Django Framework", description: "Build web applications with Django. Covers models, views, templates, authentication, REST APIs.", price: 849, imageUrl: "/images/Djengo.png", category: "Framework", rating: 4.7, bestSeller: false, author: "Various Authors", pages: "440" },
      { id: 14, title: "Laravel Framework", description: "Master Laravel PHP framework. Includes Eloquent ORM, authentication, APIs, testing.", price: 899, imageUrl: "/images/laravel.png", category: "Framework", rating: 4.4, bestSeller: false, author: "Various Authors", pages: "460" },
      
      // Database Books
      { id: 15, title: "Database Systems", description: "Complete guide to database design, SQL queries, normalization, indexing, and working with MySQL, PostgreSQL.", price: 849, imageUrl: "/images/DBMS.png", category: "Database", rating: 4.3, bestSeller: false, author: "Various Authors", pages: "500" },
      { id: 16, title: "SQL Mastery", description: "From basic queries to advanced SQL features. Includes performance optimization, stored procedures.", price: 749, imageUrl: "/images/SQL.png", category: "Database", rating: 4.2, bestSeller: false, author: "Various Authors", pages: "380" },
      { id: 17, title: "Oracle SQL", description: "Specialized guide for Oracle Database development. Covers PL/SQL, performance tuning.", price: 1299, imageUrl: "/images/OSQL.png", category: "Database", rating: 4.6, bestSeller: false, author: "Various Authors", pages: "620" },
      
      // Data Science Books
      { id: 18, title: "Data Visualization", description: "Master data visualization with Matplotlib, Seaborn, and Plotly. Create stunning charts and graphs.", price: 699, imageUrl: "/images/matplotlip.png", category: "Data Science", rating: 4.1, bestSeller: false, author: "Various Authors", pages: "280" },
      { id: 19, title: "Pandas", description: "Complete guide to data manipulation and analysis using Pandas. Real-world datasets.", price: 749, imageUrl: "/images/Panda.png", category: "Data Science", rating: 4.5, bestSeller: false, author: "Various Authors", pages: "340" },
      { id: 20, title: "AI Fundamentals", description: "Introduction to Artificial Intelligence concepts, algorithms, neural networks.", price: 1199, imageUrl: "/images/ai.png", category: "Data Science", rating: 4.7, bestSeller: false, author: "Various Authors", pages: "480" },
      { id: 21, title: "Machine Learning", description: "Complete ML guide covering supervised/unsupervised learning, deep learning, TensorFlow, PyTorch.", price: 1399, imageUrl: "/images/AI_ML.png", category: "Data Science", rating: 4.9, bestSeller: false, author: "Various Authors", pages: "560" },
      
      // Theoretical Books
      { id: 22, title: "Data Structures & Algorithms", description: "Master essential data structures and algorithms with Python/Java implementations.", price: 799, imageUrl: "/images/DSA.png", category: "Theoretical", rating: 4.8, bestSeller: false, author: "Various Authors", pages: "520" },
      { id: 23, title: "Cloud Computing Technology", description: "Comprehensive guide to AWS, Azure, and Google Cloud. Includes cloud architecture, services.", price: 1099, imageUrl: "/images/cloud.png", category: "Theoretical", rating: 4.4, bestSeller: false, author: "Various Authors", pages: "490" },
      { id: 24, title: "Computer Networks", description: "Comprehensive guide to networking concepts, protocols, security, and administration.", price: 999, imageUrl: "/images/com_netw.png", category: "Theoretical", rating: 4.2, bestSeller: false, author: "Various Authors", pages: "540" }
    ];
  };

  const handleBookInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookForm({
      ...bookForm,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleCategoryInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryForm({
      ...categoryForm,
      [name]: value
    });
  };

  const addBook = () => {
    if (bookForm.title.trim() && bookForm.category) {
      const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
      const newBook = {
        id: newId,
        title: bookForm.title,
        description: bookForm.description,
        price: parseFloat(bookForm.price),
        imageUrl: bookForm.imageUrl || "/images/default-book.png",
        category: bookForm.category,
        rating: parseFloat(bookForm.rating),
        bestSeller: bookForm.bestSeller,
        author: bookForm.author,
        pages: bookForm.pages
      };
      
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      
      // Update category book count
      setCategories(categories.map(cat =>
        cat.name === bookForm.category
          ? { ...cat, books: cat.books + 1 }
          : cat
      ));
      
      setBookForm({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        category: "",
        rating: "4.5",
        bestSeller: false,
        author: "Various Authors",
        pages: "300"
      });
      setShowBookModal(false);
      alert(`${bookForm.title} added successfully!`);
    }
  };

  const editBook = (book) => {
    setEditingBook(book);
    setBookForm({
      title: book.title,
      description: book.description,
      price: book.price.toString(),
      imageUrl: book.imageUrl,
      category: book.category,
      rating: book.rating.toString(),
      bestSeller: book.bestSeller,
      author: book.author,
      pages: book.pages.toString()
    });
    setShowBookModal(true);
  };

  const updateBook = () => {
    if (bookForm.title.trim() && editingBook) {
      const updatedBooks = books.map(book =>
        book.id === editingBook.id
          ? {
              ...book,
              title: bookForm.title,
              description: bookForm.description,
              price: parseFloat(bookForm.price),
              imageUrl: bookForm.imageUrl,
              category: bookForm.category,
              rating: parseFloat(bookForm.rating),
              bestSeller: bookForm.bestSeller,
              author: bookForm.author,
              pages: bookForm.pages
            }
          : book
      );
      
      setBooks(updatedBooks);
      setEditingBook(null);
      setBookForm({
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        category: "",
        rating: "4.5",
        bestSeller: false,
        author: "Various Authors",
        pages: "300"
      });
      setShowBookModal(false);
      alert("Book updated successfully!");
    }
  };

  const deleteBook = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      const bookToDelete = books.find(book => book.id === id);
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      
      // Update category book count
      setCategories(categories.map(cat =>
        cat.name === bookToDelete.category
          ? { ...cat, books: Math.max(0, cat.books - 1) }
          : cat
      ));
      
      alert("Book deleted successfully!");
    }
  };

  const addCategory = () => {
    if (categoryForm.name.trim()) {
      const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([
        ...categories,
        {
          id: newId,
          name: categoryForm.name,
          books: 0,
          status: categoryForm.status,
          description: categoryForm.description
        }
      ]);
      setCategoryForm({ name: "", description: "", status: "active" });
      setShowCategoryModal(false);
    }
  };

  const editCategory = (category) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      description: category.description,
      status: category.status
    });
    setShowCategoryModal(true);
  };

  const updateCategory = () => {
    if (categoryForm.name.trim() && editingCategory) {
      const oldCategoryName = editingCategory.name;
      const newCategoryName = categoryForm.name;
      
      // Update categories list
      const updatedCategories = categories.map(cat =>
        cat.id === editingCategory.id
          ? {
              ...cat,
              name: categoryForm.name,
              description: categoryForm.description,
              status: categoryForm.status
            }
          : cat
      );
      
      // Update books with new category name
      const updatedBooks = books.map(book =>
        book.category === oldCategoryName
          ? { ...book, category: newCategoryName }
          : book
      );
      
      setCategories(updatedCategories);
      setBooks(updatedBooks);
      setEditingCategory(null);
      setCategoryForm({ name: "", description: "", status: "active" });
      setShowCategoryModal(false);
      alert("Category updated successfully!");
    }
  };

  const toggleCategoryStatus = (id) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, status: cat.status === 'active' ? 'inactive' : 'active' } : cat
    ));
  };

  const deleteCategory = (id) => {
    const categoryToDelete = categories.find(cat => cat.id === id);
    if (categoryToDelete.books > 0) {
      alert(`Cannot delete category with ${categoryToDelete.books} books. Please move or delete books first.`);
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete category "${categoryToDelete.name}"?`)) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const totalBooks = books.length;
  const activeCategories = categories.filter(cat => cat.status === 'active').length;

  const getBooksByCategory = (categoryName) => {
    return books.filter(book => book.category === categoryName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with both Add Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Book & Category Management</h1>
            <p className="text-gray-500 text-sm mt-1">
              Total Categories: {categories.length} | Active: {activeCategories} | Total Books: {totalBooks}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setEditingBook(null);
                setBookForm({
                  title: "",
                  description: "",
                  price: "",
                  imageUrl: "",
                  category: "",
                  rating: "4.5",
                  bestSeller: false,
                  author: "Various Authors",
                  pages: "300"
                });
                setShowBookModal(true);
              }}
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
            >
              + Add Book
            </button>
            <button
              onClick={() => {
                setEditingCategory(null);
                setCategoryForm({ name: "", description: "", status: "active" });
                setShowCategoryModal(true);
              }}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300"
            >
              + Add Category
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    category.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">{category.books} Books</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setEditingBook(null);
                        setBookForm({
                          title: "",
                          description: "",
                          price: "",
                          imageUrl: "",
                          category: category.name,
                          rating: "4.5",
                          bestSeller: false,
                          author: "Various Authors",
                          pages: "300"
                        });
                        setShowBookModal(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-700 text-sm"
                    >
                      Add Book
                    </button>
                    <button
                      onClick={() => editCategory(category)}
                      className="text-amber-600 hover:text-amber-700 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books by Category */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Books by Category</h2>
        {categories.map((category) => {
          const categoryBooks = getBooksByCategory(category.name);
          if (categoryBooks.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
                {category.name} ({categoryBooks.length} books)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Image</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Title</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Rating</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Pages</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {categoryBooks.map((book) => (
                      <tr key={book.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <img src={book.imageUrl} alt={book.title} className="w-12 h-12 object-cover rounded" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">{book.title}</div>
                          <div className="text-xs text-gray-500">{book.author}</div>
                        </td>
                        <td className="px-4 py-3 text-gray-900">₹{book.price}</td>
                        <td className="px-4 py-3">
                          <span className="text-yellow-500">★</span> {book.rating}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{book.pages}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => editBook(book)}
                            className="text-indigo-600 hover:text-indigo-700 mr-3 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteBook(book.id)}
                            className="text-red-600 hover:text-red-700 text-sm"
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
          );
        })}
      </div>

      {/* Add/Edit Book Modal */}
      {showBookModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto py-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {editingBook ? "Edit Book" : "Add New Book"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Book Title *</label>
                <input
                  type="text"
                  name="title"
                  value={bookForm.title}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter book title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={bookForm.price}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter price"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  name="category"
                  value={bookForm.category}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.filter(c => c.status === 'active').map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={bookForm.rating}
                  onChange={handleBookInputChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={bookForm.author}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Pages</label>
                <input
                  type="text"
                  name="pages"
                  value={bookForm.pages}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={bookForm.imageUrl}
                  onChange={handleBookInputChange}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter image URL or path (e.g., /images/book.png)"
                />
                {bookForm.imageUrl && (
                  <div className="mt-2">
                    <img src={bookForm.imageUrl} alt="Preview" className="w-20 h-20 object-cover rounded" />
                  </div>
                )}
              </div>
              
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={bookForm.description}
                  onChange={handleBookInputChange}
                  rows="3"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter book description"
                />
              </div>
              
              <div className="col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="bestSeller"
                    checked={bookForm.bestSeller}
                    onChange={handleBookInputChange}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">Mark as Best Seller</span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={editingBook ? updateBook : addBook}
                disabled={!bookForm.title.trim() || !bookForm.category || !bookForm.price}
                className={`flex-1 py-3 rounded-xl text-white transition-all duration-300 ${
                  bookForm.title.trim() && bookForm.category && bookForm.price
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {editingBook ? "Update Book" : "Add Book"}
              </button>
              <button
                onClick={() => {
                  setShowBookModal(false);
                  setEditingBook(null);
                }}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {editingCategory ? "Edit Category" : "Add New Category"}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name *</label>
                <input
                  type="text"
                  name="name"
                  value={categoryForm.name}
                  onChange={handleCategoryInputChange}
                  placeholder="e.g., Frontend, Backend, Database"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={categoryForm.description}
                  onChange={handleCategoryInputChange}
                  rows="3"
                  placeholder="Brief description of this category"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={categoryForm.status}
                  onChange={handleCategoryInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={editingCategory ? updateCategory : addCategory}
                disabled={!categoryForm.name.trim()}
                className={`flex-1 py-3 rounded-xl text-white transition-all duration-300 ${
                  categoryForm.name.trim()
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {editingCategory ? "Update Category" : "Add Category"}
              </button>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setEditingCategory(null);
                }}
                className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;