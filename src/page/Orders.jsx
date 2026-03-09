import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedItemForCancel, setSelectedItemForCancel] = useState(null);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/Loginpage");
      return;
    }

    loadOrders();
  }, [navigate]);

  const loadOrders = () => {
    // Get current user
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    
    // Get all orders from localStorage
    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    
    // Filter orders for current user only
    const userOrders = allOrders.filter(order => 
      order.userEmail && order.userEmail === currentUser.email
    );
    
    setOrders(userOrders);
    setLoading(false);
  };

  const handleCancelItem = (orderId, itemId) => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    
    // Find the order
    const orderIndex = allOrders.findIndex(o => o.id === orderId && o.userEmail === currentUser.email);
    
    if (orderIndex !== -1) {
      const order = allOrders[orderIndex];
      
      // Mark the specific item as cancelled instead of removing it
      const updatedItems = order.items.map(item => 
        item.id === itemId 
          ? { ...item, status: "cancelled", cancelledAt: new Date().toLocaleString() }
          : item
      );
      
      // Check if all items are cancelled
      const allCancelled = updatedItems.every(item => item.status === "cancelled");
      
      if (allCancelled) {
        // If all items are cancelled, mark entire order as cancelled
        allOrders[orderIndex] = {
          ...order,
          items: updatedItems,
          status: "cancelled"
        };
      } else {
        // Otherwise just update the items
        allOrders[orderIndex] = {
          ...order,
          items: updatedItems
        };
      }
      
      // Save to localStorage
      localStorage.setItem("orders", JSON.stringify(allOrders));
      
      // Also remove from cart if present
      removeFromCart(itemId);
      
      // Reload orders
      loadOrders();
    }
    
    setShowCancelModal(false);
    setSelectedItemForCancel(null);
    setSelectedOrder(null);
  };

  // New function to remove cancelled item from cart
  const removeFromCart = (itemId) => {
    const cartItems = JSON.parse(localStorage.getItem("bookCart") || "[]");
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem("bookCart", JSON.stringify(updatedCart));
  };

  const handleRemoveHistory = () => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    
    // Filter out orders where all items are cancelled
    const filteredOrders = allOrders.filter(order => {
      // Keep orders that belong to other users
      if (order.userEmail !== currentUser.email) return true;
      
      // For current user's orders, keep if not all items are cancelled
      return !order.items.every(item => item.status === "cancelled");
    });
    
    // Save filtered orders
    localStorage.setItem("orders", JSON.stringify(filteredOrders));
    
    // Reload orders
    loadOrders();
    
    // Show success message
    alert("Cancelled items removed from history!");
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "bg-green-500";
      case "pending": return "bg-yellow-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "delivered": return "Delivered";
      case "pending": return "Pending";
      case "cancelled": return "Cancelled";
      default: return status;
    }
  };

  const getItemStatusColor = (status) => {
    switch(status) {
      case "cancelled": return "bg-red-500/20 text-red-400 line-through";
      case "delivered": return "bg-green-500/20 text-green-400";
      default: return "bg-yellow-500/20 text-yellow-400";
    }
  };

  // Filter orders based on selected filter and history view
  const filteredOrders = orders.filter(order => {
    // Apply status filter
    if (filter !== "all" && order.status !== filter) return false;
    
    // Apply history filter
    if (!showHistory) {
      // Hide orders where all items are cancelled
      return !order.items.every(item => item.status === "cancelled");
    }
    
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Orders
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Track and manage your book orders
          </p>
        </div>

        {/* Filters and Actions */}
        {orders.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {/* Status Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {["all", "pending", "delivered", "cancelled"].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                    filter === filterType
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {filterType === "all" ? "All Orders" : filterType}
                </button>
              ))}
            </div>

            {/* History Toggle and Remove Button */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  showHistory
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {showHistory ? "Hide History" : "Show History"}
              </button>
              
              <button
                onClick={handleRemoveHistory}
                className="px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove History
              </button>
            </div>
          </div>
        )}

        {/* Orders List */}
        <div className="space-y-6">
          {orders.length === 0 ? (
            // Empty State - No orders at all
            <div className="text-center py-16">
              <svg className="w-32 h-32 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">No Orders Yet</h3>
              <p className="text-gray-400 text-lg mb-8">
                Looks like you haven't placed any orders. Start shopping to see your orders here!
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Browse Books
              </button>
            </div>
          ) : filteredOrders.length === 0 ? (
            // Empty State - No orders for current filters
            <div className="text-center py-16">
              <svg className="w-32 h-32 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">No Orders Found</h3>
              <p className="text-gray-400 text-lg mb-8">
                {showHistory ? "No orders in history." : "No active orders with the selected filter."}
              </p>
              {!showHistory && (
                <button
                  onClick={() => setShowHistory(true)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  View History
                </button>
              )}
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Order Header */}
                <div className="bg-gray-700/50 px-6 py-4 flex flex-wrap items-center justify-between border-b border-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-mono text-gray-400">{order.id}</span>
                    <span className="text-sm text-gray-400">{order.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-bold">₹{order.total}</span>
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Order Items - Each with individual cancel button */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center space-x-4 border-b border-gray-700/50 pb-4 last:border-0 ${
                          item.status === "cancelled" ? "opacity-60" : ""
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxRjIxMjUiIHJ4PSIxMCIvPjxwYXRoIGQ9Ik0zMCAzNUMyNy4yNCAzNSAyNSAzMi43NiAyNSAzMEMyNSAyNy4yNCAyNy4yNCAyNSAzMCAyNUMzMi43NiAyNSAzNSAyNy4yNCMzNSAzMEMzNSAzMy43NiAzMi43NiAzNSAzMCAzNVpNNDAgNTBDNDAgNTEuMSAzOS4xIDUyIDM4IDUySDIyQzIwLjkgNTIgMjAgNTEuMSAyMCA1MFY0MkwyNyAzNUw0MCA0Ni41VjUwWiIgZmlsbD0iIzhDQ0NEQiIvPjwvc3ZnPg==";
                          }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className={`text-white font-medium ${item.status === "cancelled" ? "line-through text-gray-400" : ""}`}>
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-400">{item.author}</p>
                              <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                              <p className="text-sm text-gray-400">Price: ₹{item.price} each</p>
                              {item.status === "cancelled" && item.cancelledAt && (
                                <p className="text-xs text-red-400 mt-1">Cancelled on: {item.cancelledAt}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <p className={`text-white font-medium mb-2 ${item.status === "cancelled" ? "line-through text-gray-400" : ""}`}>
                                ₹{item.price * item.quantity}
                              </p>
                              
                              {/* Individual Cancel Button - Only for pending and non-cancelled items */}
                              {order.status === "pending" && item.status !== "cancelled" && (
                                <button
                                  onClick={() => {
                                    setSelectedOrder(order);
                                    setSelectedItemForCancel({ 
                                      orderId: order.id, 
                                      itemId: item.id, 
                                      itemTitle: item.title 
                                    });
                                    setShowCancelModal(true);
                                  }}
                                  className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 text-xs font-medium"
                                >
                                  Cancel Item
                                </button>
                              )}
                              
                              {item.status === "cancelled" && (
                                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-xs font-medium">
                                  Cancelled
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && !showCancelModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Order ID: <span className="text-white font-mono">{selectedOrder.id}</span></p>
                  <p className="text-sm text-gray-400">Date: <span className="text-white">{selectedOrder.date}</span></p>
                  <p className="text-sm text-gray-400">Status: <span className={`text-${getStatusColor(selectedOrder.status)}-400`}>{getStatusText(selectedOrder.status)}</span></p>
                  <p className="text-sm text-gray-400">Payment Method: <span className="text-white">{selectedOrder.paymentMethod}</span></p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Items</h4>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className={`flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg ${item.status === "cancelled" ? "opacity-60" : ""}`}>
                        <img src={item.image} alt={item.title} className="w-12 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <p className={`text-white font-medium ${item.status === "cancelled" ? "line-through text-gray-400" : ""}`}>
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-400">{item.author}</p>
                          <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                          {item.status === "cancelled" && (
                            <p className="text-xs text-red-400">Cancelled</p>
                          )}
                        </div>
                        <p className={`text-white font-medium ${item.status === "cancelled" ? "line-through text-gray-400" : ""}`}>
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Shipping Address</h4>
                  <p className="text-gray-300">{selectedOrder.shippingAddress.name}</p>
                  <p className="text-gray-300">{selectedOrder.shippingAddress.street}</p>
                  {selectedOrder.shippingAddress.street2 && (
                    <p className="text-gray-300">{selectedOrder.shippingAddress.street2}</p>
                  )}
                  <p className="text-gray-300">{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.pincode}</p>
                  <p className="text-gray-300">Phone: {selectedOrder.shippingAddress.phone}</p>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal:</span>
                      <span>₹{selectedOrder.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping:</span>
                      <span className={selectedOrder.shippingFee === 0 ? "text-green-400" : ""}>
                        {selectedOrder.shippingFee === 0 ? "FREE" : `₹${selectedOrder.shippingFee}`}
                      </span>
                    </div>
                    {selectedOrder.discount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount:</span>
                        <span>-₹{selectedOrder.discount}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-white">Total Amount</span>
                  <span className="text-lg font-bold text-blue-400">₹{selectedOrder.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Item Confirmation Modal */}
      {showCancelModal && selectedItemForCancel && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cancel Item?</h3>
              <p className="text-gray-400">
                Are you sure you want to cancel <span className="text-white font-semibold">"{selectedItemForCancel.itemTitle}"</span>? 
                This item will be marked as cancelled and removed from your active orders.
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => handleCancelItem(selectedItemForCancel.orderId, selectedItemForCancel.itemId)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Yes, Cancel Item
              </button>
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setSelectedItemForCancel(null);
                  setSelectedOrder(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                No, Keep it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;