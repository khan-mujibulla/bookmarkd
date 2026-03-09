// src/components/admin/dashboard/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBooks: 124,
    totalOrders: 56,
    totalUsers: 89,
    totalRevenue: 45678,
    lowStock: 5,
    pendingOrders: 12,
  });

  const [recentOrders, setRecentOrders] = useState([
    { id: "#1001", customer: "Rahul Sharma", amount: 1299, status: "completed", date: "2024-01-15" },
    { id: "#1002", customer: "Priya Patel", amount: 849, status: "pending", date: "2024-01-15" },
    { id: "#1003", customer: "Amit Kumar", amount: 2199, status: "processing", date: "2024-01-14" },
    { id: "#1004", customer: "Neha Gupta", amount: 599, status: "completed", date: "2024-01-14" },
    { id: "#1005", customer: "Vikram Singh", amount: 1599, status: "cancelled", date: "2024-01-13" },
  ]);

  const [topBooks, setTopBooks] = useState([
    { title: "JavaScript: The Good Parts", sales: 45, revenue: 35955 },
    { title: "Python Mastery", sales: 38, revenue: 32262 },
    { title: "React.js Guide", sales: 32, revenue: 27168 },
    { title: "C# Programming", sales: 28, revenue: 25172 },
    { title: "Data Structures", sales: 25, revenue: 19975 },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

      {/* Stats Cards - Matching your hero section style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Books"
          value={stats.totalBooks}
          icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          color="blue"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          color="green"
        />
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          color="purple"
        />
        <StatCard
          title="Total Revenue"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          color="yellow"
        />
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.lowStock > 0 && (
          <div className="p-6 bg-yellow-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/50">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-500/30 rounded-full">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-yellow-400">Low Stock Alert</h3>
                <p className="text-gray-300">{stats.lowStock} books are running low on stock</p>
              </div>
            </div>
          </div>
        )}

        {stats.pendingOrders > 0 && (
          <div className="p-6 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/50">
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/30 rounded-full">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-blue-400">Pending Orders</h3>
                <p className="text-gray-300">{stats.pendingOrders} orders need processing</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Orders</h2>
          <Link
            to="/admin/orders"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 text-white">{order.id}</td>
                  <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 text-white">₹{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      order.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Selling Books */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Top Selling Books</h2>
        <div className="space-y-4">
          {topBooks.map((book, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-500 mr-4">#{index + 1}</span>
                <div>
                  <h3 className="text-white font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-400">{book.sales} copies sold</p>
                </div>
              </div>
              <span className="text-lg font-semibold text-blue-400">₹{book.revenue.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, color }) => {
  const colors = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-pink-500",
    yellow: "from-yellow-500 to-orange-500",
  };

  return (
    <div className="p-6 bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className={`p-3 bg-gradient-to-r ${colors[color]} rounded-lg bg-opacity-20`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;