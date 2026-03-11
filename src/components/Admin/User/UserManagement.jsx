// src/components/admin/users/UserManagement.jsx
import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'blocked' : 'active' }
        : user
    ));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">User Management</h1>
      
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 overflow-hidden">
        {users.length > 0 ? (
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 text-white">{user.name}</td>
                  <td className="px-6 py-4 text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 text-gray-300">{user.orders}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.joined}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      className={`mr-3 ${
                        user.status === 'active' ? 'text-red-400 hover:text-red-300' : 'text-green-400 hover:text-green-300'
                      }`}
                    >
                      {user.status === 'active' ? 'Block' : 'Unblock'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-gray-400 text-lg">No users yet</p>
            <p className="text-gray-500 text-sm mt-1">When users register, they will appear here</p>
          </div>
        )}
      </div>

      {/* Optional: Add user stats summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Total Users</p>
          <p className="text-2xl font-bold text-white">{users.length}</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Active Users</p>
          <p className="text-2xl font-bold text-green-400">
            {users.filter(u => u.status === 'active').length}
          </p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Blocked Users</p>
          <p className="text-2xl font-bold text-red-400">
            {users.filter(u => u.status === 'blocked').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;