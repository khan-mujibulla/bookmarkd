// src/components/admin/users/UserManagement.jsx
import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@email.com", orders: 5, status: "active", joined: "2023-12-01" },
    { id: 2, name: "Priya Patel", email: "priya@email.com", orders: 2, status: "active", joined: "2024-01-10" },
    { id: 3, name: "Amit Kumar", email: "amit@email.com", orders: 8, status: "blocked", joined: "2023-11-15" },
  ]);

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
      </div>
    </div>
  );
};

export default UserManagement;