// src/components/admin/orders/OrderManagement.jsx
import React, { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: "#1001", customer: "Rahul Sharma", amount: 1299, status: "completed", items: 3, date: "2024-01-15" },
    { id: "#1002", customer: "Priya Patel", amount: 849, status: "pending", items: 1, date: "2024-01-15" },
    { id: "#1003", customer: "Amit Kumar", amount: 2199, status: "processing", items: 4, date: "2024-01-14" },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Order Management</h1>
      
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-800/50">
                <td className="px-6 py-4 text-white">{order.id}</td>
                <td className="px-6 py-4 text-gray-300">{order.customer}</td>
                <td className="px-6 py-4 text-white">₹{order.amount}</td>
                <td className="px-6 py-4 text-gray-300">{order.items}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      order.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      order.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-gray-400">{order.date}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View
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

export default OrderManagement;