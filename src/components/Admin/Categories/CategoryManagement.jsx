// src/components/admin/categories/CategoryManagement.jsx
import React, { useState } from "react";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    // Frontend Categories
    { id: 1, name: "C#", books: 1, status: "active", description: "C# programming books including .NET Core and ASP.NET" },
    { id: 2, name: "JavaScript", books: 1, status: "active", description: "JavaScript programming including ES6+ features" },
    { id: 3, name: "HTML/CSS", books: 1, status: "active", description: "HTML5, CSS3, responsive web design" },
    { id: 4, name: "React", books: 1, status: "active", description: "React.js, hooks, context API, Next.js" },
    { id: 5, name: "UX Design", books: 1, status: "active", description: "Mobile UX/UI design and prototyping" },
    
    // Backend Categories
    { id: 6, name: "Python", books: 1, status: "active", description: "Python programming, Django, Flask, data science" },
    { id: 7, name: "Java", books: 1, status: "active", description: "Java, Spring Boot, Hibernate" },
    { id: 8, name: "Node.js", books: 1, status: "active", description: "Node.js, Express, backend development" },
    { id: 9, name: "C++", books: 1, status: "active", description: "C++ programming, STL, game development" },
    { id: 10, name: "C", books: 1, status: "active", description: "C programming fundamentals and system programming" },
    { id: 11, name: "PHP", books: 1, status: "active", description: "PHP, Laravel framework" },
    
    // Framework Categories
    { id: 12, name: "ASP.NET", books: 1, status: "active", description: "ASP.NET Core, MVC, Web API" },
    { id: 13, name: "Django", books: 1, status: "active", description: "Django framework, REST APIs" },
    { id: 14, name: "Laravel", books: 1, status: "active", description: "Laravel PHP framework" },
    
    // Database Categories
    { id: 15, name: "Database", books: 1, status: "active", description: "Database systems, MySQL, PostgreSQL, MongoDB" },
    { id: 16, name: "SQL", books: 1, status: "active", description: "SQL queries, optimization" },
    { id: 17, name: "Oracle", books: 1, status: "active", description: "Oracle Database, PL/SQL" },
    
    // Data Science Categories
    { id: 18, name: "Data Visualization", books: 1, status: "active", description: "Matplotlib, Seaborn, Plotly" },
    { id: 19, name: "Pandas", books: 1, status: "active", description: "Data manipulation with Pandas" },
    { id: 20, name: "AI", books: 1, status: "active", description: "Artificial Intelligence fundamentals" },
    { id: 21, name: "Machine Learning", books: 1, status: "active", description: "ML, deep learning, TensorFlow" },
    
    // Theoretical Categories
    { id: 22, name: "DSA", books: 1, status: "active", description: "Data Structures and Algorithms" },
    { id: 23, name: "Cloud Computing", books: 1, status: "active", description: "AWS, Azure, Google Cloud" },
    { id: 24, name: "Computer Networks", books: 1, status: "active", description: "Networking concepts and protocols" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    status: "active"
  });

  const handleInputChange = (e) => {
    setCategoryForm({
      ...categoryForm,
      [e.target.name]: e.target.value
    });
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
          description: categoryForm.description || `${categoryForm.name} books`
        }
      ]);
      setCategoryForm({ name: "", description: "", status: "active" });
      setShowModal(false);
    }
  };

  const editCategory = (category) => {
    setEditingCategory(category);
    setCategoryForm({
      name: category.name,
      description: category.description || "",
      status: category.status
    });
    setShowModal(true);
  };

  const updateCategory = () => {
    if (categoryForm.name.trim() && editingCategory) {
      setCategories(categories.map(cat =>
        cat.id === editingCategory.id 
          ? { 
              ...cat, 
              name: categoryForm.name, 
              description: categoryForm.description,
              status: categoryForm.status 
            } 
          : cat
      ));
      setEditingCategory(null);
      setCategoryForm({ name: "", description: "", status: "active" });
      setShowModal(false);
    }
  };

  const toggleCategoryStatus = (id) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, status: cat.status === 'active' ? 'inactive' : 'active' } : cat
    ));
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  // Calculate total books across all categories
  const totalBooks = categories.reduce((sum, cat) => sum + cat.books, 0);
  const activeCategories = categories.filter(cat => cat.status === 'active').length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Category Management</h1>
          <p className="text-gray-400 text-sm mt-1">
            Total Categories: {categories.length} | Active: {activeCategories} | Total Books: {totalBooks}
          </p>
        </div>
        <button
          onClick={() => {
            setEditingCategory(null);
            setCategoryForm({ name: "", description: "", status: "active" });
            setShowModal(true);
          }}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700"
        >
          + Add Category
        </button>
      </div>

      {/* Categories Grid/Table */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Total Books</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">#{category.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-300 text-sm max-w-xs">
                    {category.description}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {category.books} {category.books === 1 ? 'book' : 'books'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      category.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => editCategory(category)}
                      className="text-blue-400 hover:text-blue-300 mr-3"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleCategoryStatus(category.id)}
                      className="text-yellow-400 hover:text-yellow-300 mr-3"
                    >
                      {category.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => deleteCategory(category.id)}
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

      {/* Add/Edit Category Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/90 rounded-2xl border border-gray-700/50 p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">
              {editingCategory ? "Edit Category" : "Add New Category"}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Category Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={categoryForm.name}
                  onChange={handleInputChange}
                  placeholder="e.g., JavaScript, Python"
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={categoryForm.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of this category"
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={categoryForm.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500"
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
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                {editingCategory ? "Update Category" : "Add Category"}
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingCategory(null);
                  setCategoryForm({ name: "", description: "", status: "active" });
                }}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Stats Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Total Categories</p>
          <p className="text-2xl font-bold text-white">{categories.length}</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Active Categories</p>
          <p className="text-2xl font-bold text-green-400">{activeCategories}</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Inactive Categories</p>
          <p className="text-2xl font-bold text-gray-400">{categories.length - activeCategories}</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Total Books</p>
          <p className="text-2xl font-bold text-blue-400">{totalBooks}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryManagement;