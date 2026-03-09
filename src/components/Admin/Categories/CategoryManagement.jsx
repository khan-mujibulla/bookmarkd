// src/components/admin/categories/CategoryManagement.jsx
import React, { useState } from "react";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    // JavaScript aur Web Development
    { id: 1, name: "JavaScript", books: 45, status: "active", description: "JavaScript programming books including ES6+, Node.js" },
    { id: 2, name: "Python", books: 38, status: "active", description: "Python programming, Django, Flask, data science" },
    { id: 3, name: "React", books: 32, status: "active", description: "React.js, hooks, context API, Next.js" },
    { id: 4, name: "C#", books: 28, status: "active", description: "C# programming, .NET Core, ASP.NET" },
    { id: 5, name: "DSA", books: 22, status: "active", description: "Data Structures and Algorithms" },
    
    // Web Technologies
    { id: 6, name: "HTML/CSS", books: 38, status: "active", description: "HTML5, CSS3, responsive design" },
    { id: 7, name: "Java", books: 25, status: "active", description: "Core Java, Spring Boot, Hibernate" },
    { id: 8, name: "Node.js", books: 19, status: "active", description: "Node.js, Express, backend development" },
    { id: 9, name: "Database", books: 17, status: "active", description: "MongoDB, MySQL, PostgreSQL" },
    { id: 10, name: "SQL", books: 29, status: "active", description: "SQL queries, database design" },
    
    // Frameworks
    { id: 11, name: "Angular", books: 14, status: "active", description: "Angular framework, TypeScript" },
    { id: 12, name: "Vue", books: 21, status: "active", description: "Vue.js, Vuex, Nuxt.js" },
    
    // Mobile Development
    { id: 13, name: "Mobile", books: 29, status: "active", description: "iOS, Android, React Native, Flutter" },
    
    // Cloud aur DevOps
    { id: 14, name: "Cloud", books: 21, status: "active", description: "AWS, Azure, Google Cloud" },
    { id: 15, name: "DevOps", books: 56, status: "active", description: "Docker, Kubernetes, CI/CD, Git" },
    
    // AI/ML
    { id: 16, name: "AI/ML", books: 21, status: "active", description: "Machine Learning, Deep Learning, AI" },
    
    // Security aur Architecture
    { id: 17, name: "Security", books: 16, status: "active", description: "Cybersecurity, ethical hacking" },
    { id: 18, name: "Architecture", books: 10, status: "active", description: "System design, software architecture" },
    
    // Additional Categories
    { id: 19, name: "C++", books: 15, status: "inactive", description: "C++ programming, STL" },
    { id: 20, name: "Go", books: 8, status: "inactive", description: "Golang programming" },
    { id: 21, name: "Rust", books: 6, status: "inactive", description: "Rust programming" },
    { id: 22, name: "PHP", books: 12, status: "active", description: "PHP, Laravel" },
    { id: 23, name: "Ruby", books: 7, status: "inactive", description: "Ruby on Rails" },
    { id: 24, name: "Swift", books: 9, status: "inactive", description: "iOS development with Swift" }
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
                      {category.books} books
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