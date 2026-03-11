// src/components/admin/orders/OrderManagement.jsx
import React, { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
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
        {orders.length > 0 ? (
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
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="text-gray-400 text-lg">No orders yet</p>
            <p className="text-gray-500 text-sm mt-1">When customers place orders, they will appear here</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-6">Order Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Order ID:</span>
                <span className="text-white font-medium">{selectedOrder.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Customer:</span>
                <span className="text-white">{selectedOrder.customer}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white font-bold">₹{selectedOrder.amount}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Items:</span>
                <span className="text-white">{selectedOrder.items}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Status:</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  selectedOrder.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  selectedOrder.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  selectedOrder.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {selectedOrder.status}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Date:</span>
                <span className="text-gray-300">{selectedOrder.date}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Order Stats Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Total Orders</p>
          <p className="text-2xl font-bold text-white">{orders.length}</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Pending Orders</p>
          <p className="text-2xl font-bold text-yellow-400">
            {orders.filter(o => o.status === 'pending').length}
          </p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Processing</p>
          <p className="text-2xl font-bold text-blue-400">
            {orders.filter(o => o.status === 'processing').length}
          </p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
          <p className="text-gray-400 text-sm">Completed</p>
          <p className="text-2xl font-bold text-green-400">
            {orders.filter(o => o.status === 'completed').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;