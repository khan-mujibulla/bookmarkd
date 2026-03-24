import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddtoCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");
  
  // Checkout states
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });
  const [addressError, setAddressError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  
  // Payment details
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [paymentDetailsError, setPaymentDetailsError] = useState('');

  // New state for payment success popup
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    loadCart();
    
    // Load saved addresses
    const savedAddrs = localStorage.getItem("savedAddresses");
    if (savedAddrs) {
      try {
        setSavedAddresses(JSON.parse(savedAddrs));
      } catch (error) {
        console.error("Error loading addresses:", error);
      }
    }
  }, []);

  const loadCart = () => {
    const savedCart = localStorage.getItem("bookCart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        
        // Only filter out cancelled items if there are orders
        // But don't filter if there are no orders or user is not logged in
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
        
        // Only filter if we have orders AND a logged in user
        if (orders.length > 0 && currentUser.email) {
          // Get all cancelled item IDs from user's orders
          const cancelledItemIds = new Set();
          orders.forEach(order => {
            if (order.userEmail === currentUser.email) {
              order.items.forEach(item => {
                if (item.status === "cancelled") {
                  cancelledItemIds.add(item.id);
                }
              });
            }
          });
          
          // Filter out cancelled items from cart
          const filteredCart = parsedCart.filter(item => !cancelledItemIds.has(item.id));
          setCartItems(filteredCart);
        } else {
          // If no orders or no user, just set the cart as is
          setCartItems(parsedCart);
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        setCartItems([]);
      }
    }
  };

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("bookCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save addresses to localStorage
  useEffect(() => {
    localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Listen for storage events
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "bookCart") {
        try {
          setCartItems(JSON.parse(e.newValue));
        } catch (error) {
          console.error("Error parsing storage change:", error);
        }
      } else if (e.key === "orders") {
        // When orders change, reload cart to filter out cancelled items
        loadCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0,
  );
  
  const shippingFee = subtotal > 999 ? 0 : 40;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const total = subtotal + shippingFee - discount;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const applyPromoCode = () => {
    setPromoError("");

    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }

    const validPromoCodes = ["BOOK10", "BOOKMARK20", "READMORE15"];

    if (validPromoCodes.includes(promoCode.toUpperCase())) {
      setAppliedPromo(promoCode.toUpperCase());
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setAppliedPromo(null);
    }
  };

  const validateAddress = () => {
    if (!address.fullName.trim()) return "Please enter full name";
    if (!address.phone.trim() || !/^\d{10}$/.test(address.phone)) return "Please enter valid 10-digit phone number";
    if (!address.addressLine1.trim()) return "Please enter address line 1";
    if (!address.city.trim()) return "Please enter city";
    if (!address.state.trim()) return "Please enter state";
    if (!address.pincode.trim() || !/^\d{6}$/.test(address.pincode)) return "Please enter valid 6-digit pincode";
    return "";
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const error = validateAddress();
    if (error) {
      setAddressError(error);
      return;
    }
    
    if (editingAddress) {
      const updatedAddresses = savedAddresses.map(addr => 
        addr.id === editingAddress.id ? { ...address, id: editingAddress.id } : addr
      );
      setSavedAddresses(updatedAddresses);
      setEditingAddress(null);
    } else {
      const newAddress = { ...address, id: Date.now() };
      setSavedAddresses([...savedAddresses, newAddress]);
    }
    
    setShowAddressForm(false);
    setAddressError('');
    setAddress({
      fullName: '', phone: '', addressLine1: '', addressLine2: '',
      city: '', state: '', pincode: '', landmark: ''
    });
  };

  const selectSavedAddress = (addr) => {
    setAddress(addr);
    setCheckoutStep('payment');
  };

  const validatePaymentDetails = () => {
    setPaymentDetailsError('');
    
    if (selectedPayment === 'upi') {
      if (!upiId.trim()) {
        setPaymentDetailsError('Please enter your UPI ID');
        return false;
      }
      const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
      if (!upiRegex.test(upiId)) {
        setPaymentDetailsError('Please enter a valid UPI ID (e.g., name@okhdfcbank)');
        return false;
      }
    }
    
    if (selectedPayment === 'card') {
      if (!cardDetails.cardNumber.trim()) {
        setPaymentDetailsError('Please enter your card number');
        return false;
      }
      const cardNum = cardDetails.cardNumber.replace(/\s/g, '');
      if (!/^\d{16}$/.test(cardNum)) {
        setPaymentDetailsError('Please enter a valid 16-digit card number');
        return false;
      }
      
      if (!cardDetails.expiryDate.trim()) {
        setPaymentDetailsError('Please enter expiry date');
        return false;
      }
      if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
        setPaymentDetailsError('Please enter expiry date in MM/YY format');
        return false;
      }
      
      if (!cardDetails.cvv.trim()) {
        setPaymentDetailsError('Please enter CVV');
        return false;
      }
      if (!/^\d{3}$/.test(cardDetails.cvv)) {
        setPaymentDetailsError('Please enter a valid 3-digit CVV');
        return false;
      }
      
      if (!cardDetails.nameOnCard.trim()) {
        setPaymentDetailsError('Please enter the name on card');
        return false;
      }
    }
    
    return true;
  };

  const handlePayment = () => {
    setPaymentError('');
    
    if (!selectedPayment) {
      setPaymentError("Please select a payment method");
      return;
    }
    
    if (!validatePaymentDetails()) {
      return;
    }

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    if (!isLoggedIn || !user.email) {
      alert("Please login to place order");
      navigate("/Loginpage");
      return;
    }

    // Create order object
    const orderId = `ORD${Date.now().toString().slice(-8)}`;
    const newOrder = {
      id: orderId,
      userEmail: user.email,
      userName: user.name || user.email.split('@')[0],
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        author: item.author || "Various Authors",
        price: item.price,
        quantity: item.quantity,
        image: item.imageUrl,
        category: item.category,
        status: "pending"
      })),
      subtotal: subtotal,
      shippingFee: shippingFee,
      discount: discount,
      appliedPromo: appliedPromo,
      total: total,
      status: "pending",
      paymentMethod: selectedPayment === 'cod' ? 'Cash on Delivery' : 
                     selectedPayment === 'upi' ? 'UPI' : 'Card',
      paymentDetails: selectedPayment === 'upi' ? { upiId } : 
                     selectedPayment === 'card' ? { cardLast4: cardDetails.cardNumber.slice(-4) } : {},
      shippingAddress: {
        name: address.fullName,
        phone: address.phone,
        street: address.addressLine1,
        street2: address.addressLine2,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        landmark: address.landmark
      }
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Store completed order for popup
    setCompletedOrder(newOrder);

    // Show payment success popup
    setShowPaymentSuccess(true);
  };

  const handleViewOrders = () => {
    setShowPaymentSuccess(false);
    navigate("/orders");
  };

  const handleContinueShopping = () => {
    setShowPaymentSuccess(false);
    // Clear cart after successful order
    setCartItems([]);
    localStorage.removeItem("bookCart");
    setCheckoutStep('cart');
    // Reset payment and address
    setSelectedPayment('');
    setUpiId('');
    setCardDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: ''
    });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const renderCheckoutStep = () => {
    switch(checkoutStep) {
      case 'address':
        return (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Address</h2>
            
            {/* Saved Addresses */}
            {savedAddresses.length > 0 && !showAddressForm && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Saved Addresses</h3>
                <div className="space-y-3">
                  {savedAddresses.map((addr) => (
                    <div key={addr.id} className="bg-gray-50/80 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-gray-900 font-medium">{addr.fullName}</p>
                          <p className="text-gray-600 text-sm">{addr.addressLine1}</p>
                          {addr.addressLine2 && <p className="text-gray-600 text-sm">{addr.addressLine2}</p>}
                          <p className="text-gray-600 text-sm">{addr.city}, {addr.state} - {addr.pincode}</p>
                          <p className="text-gray-600 text-sm">Phone: {addr.phone}</p>
                          {addr.landmark && <p className="text-gray-600 text-sm">Landmark: {addr.landmark}</p>}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => selectSavedAddress(addr)}
                            className="px-3 py-1 bg-[#4F46E5] text-white rounded-lg text-sm hover:bg-[#4F46E5]/90"
                          >
                            Select
                          </button>
                          <button
                            onClick={() => {
                              setEditingAddress(addr);
                              setAddress(addr);
                              setShowAddressForm(true);
                            }}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!showAddressForm ? (
              <button
                onClick={() => setShowAddressForm(true)}
                className="w-full py-3 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-lg font-medium hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 transition-colors"
              >
                + Add New Address
              </button>
            ) : (
              <form onSubmit={handleAddressSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={address.fullName}
                      onChange={(e) => setAddress({...address, fullName: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={address.phone}
                      onChange={(e) => setAddress({...address, phone: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
                  <input
                    type="text"
                    value={address.addressLine1}
                    onChange={(e) => setAddress({...address, addressLine1: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
                  <input
                    type="text"
                    value={address.addressLine2}
                    onChange={(e) => setAddress({...address, addressLine2: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      value={address.city}
                      onChange={(e) => setAddress({...address, city: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      value={address.state}
                      onChange={(e) => setAddress({...address, state: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      value={address.pincode}
                      onChange={(e) => setAddress({...address, pincode: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Landmark (Optional)</label>
                  <input
                    type="text"
                    value={address.landmark}
                    onChange={(e) => setAddress({...address, landmark: e.target.value})}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                  />
                </div>

                {addressError && (
                  <p className="text-red-500 text-sm">{addressError}</p>
                )}

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-700"
                  >
                    {editingAddress ? 'Update Address' : 'Save Address'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddressForm(false);
                      setEditingAddress(null);
                      setAddress({
                        fullName: '', phone: '', addressLine1: '', addressLine2: '',
                        city: '', state: '', pincode: '', landmark: ''
                      });
                    }}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {savedAddresses.length > 0 && !showAddressForm && (
              <button
                onClick={() => setCheckoutStep('payment')}
                className="mt-4 w-full py-3 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-lg font-medium hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90"
              >
                Proceed to Payment
              </button>
            )}
          </div>
        );

      case 'payment':
        return (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
            
            {/* Delivery Address Summary */}
            <div className="mb-6 p-4 bg-gray-50/80 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery To:</h3>
              <p className="text-gray-700">{address.fullName}</p>
              <p className="text-gray-700">{address.addressLine1}</p>
              {address.addressLine2 && <p className="text-gray-700">{address.addressLine2}</p>}
              <p className="text-gray-700">{address.city}, {address.state} - {address.pincode}</p>
              <p className="text-gray-700">Phone: {address.phone}</p>
              <button
                onClick={() => setCheckoutStep('address')}
                className="mt-2 text-[#4F46E5] text-sm hover:text-[#4F46E5]/80"
              >
                Change Address
              </button>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-6">
              {/* Cash on Delivery */}
              <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                selectedPayment === 'cod' 
                  ? 'border-[#4F46E5] bg-[#4F46E5]/5' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={selectedPayment === 'cod'}
                    onChange={(e) => {
                      setSelectedPayment(e.target.value);
                      setPaymentDetailsError('');
                    }}
                    className="w-4 h-4 text-[#4F46E5] border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-gray-900 font-medium">Cash on Delivery</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Pay when you receive your order</p>
                  </div>
                </div>
              </label>

              {/* UPI */}
              <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                selectedPayment === 'upi' 
                  ? 'border-[#4F46E5] bg-[#4F46E5]/5' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={selectedPayment === 'upi'}
                    onChange={(e) => {
                      setSelectedPayment(e.target.value);
                      setPaymentDetailsError('');
                    }}
                    className="w-4 h-4 text-[#4F46E5] border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-900 font-medium">UPI</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Pay using Google Pay, PhonePe, Paytm</p>
                  </div>
                </div>
                {selectedPayment === 'upi' && (
                  <div className="mt-3 pl-7">
                    <input
                      type="text"
                      placeholder="Enter UPI ID (e.g., name@okhdfcbank)"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <p className="text-gray-500 text-xs mt-1">Example: yourname@okhdfcbank, yourname@paytm</p>
                  </div>
                )}
              </label>

              {/* Credit/Debit Card */}
              <label className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                selectedPayment === 'card' 
                  ? 'border-[#4F46E5] bg-[#4F46E5]/5' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedPayment === 'card'}
                    onChange={(e) => {
                      setSelectedPayment(e.target.value);
                      setPaymentDetailsError('');
                    }}
                    className="w-4 h-4 text-[#4F46E5] border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-gray-900 font-medium">Credit / Debit Card</span>
                    </div>
                  </div>
                </div>
                {selectedPayment === 'card' && (
                  <div className="mt-3 pl-7 space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.cardNumber}
                      onChange={(e) => {
                        const formatted = formatCardNumber(e.target.value);
                        setCardDetails({...cardDetails, cardNumber: formatted});
                      }}
                      maxLength="19"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) => {
                          const formatted = formatExpiryDate(e.target.value);
                          setCardDetails({...cardDetails, expiryDate: formatted});
                        }}
                        maxLength="5"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          if (val.length <= 3) {
                            setCardDetails({...cardDetails, cvv: val});
                          }
                        }}
                        maxLength="3"
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Card"
                      value={cardDetails.nameOnCard}
                      onChange={(e) => setCardDetails({...cardDetails, nameOnCard: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </label>
            </div>

            {paymentError && (
              <p className="text-red-500 text-sm mb-4">{paymentError}</p>
            )}
            
            {paymentDetailsError && (
              <p className="text-red-500 text-sm mb-4">{paymentDetailsError}</p>
            )}

            <button
              onClick={handlePayment}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Pay ₹{total}
            </button>

            <button
              onClick={() => setCheckoutStep('address')}
              className="w-full mt-3 py-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back to Address
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">
            {checkoutStep === 'cart' && 'Review your selected books and proceed to checkout'}
            {checkoutStep === 'address' && 'Enter your delivery address'}
            {checkoutStep === 'payment' && 'Choose your payment method'}
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  checkoutStep === 'cart' || checkoutStep === 'address' || checkoutStep === 'payment'
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#818CF8]' 
                    : 'bg-gray-300'
                }`}>
                  <span className="text-white font-bold">1</span>
                </div>
                <span className={`text-sm ${checkoutStep === 'cart' ? 'text-[#4F46E5] font-medium' : 'text-gray-500'}`}>Cart</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  checkoutStep === 'address' || checkoutStep === 'payment'
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#818CF8]' 
                    : 'bg-gray-300'
                }`}>
                  <span className="text-white font-bold">2</span>
                </div>
                <span className={`text-sm ${checkoutStep === 'address' ? 'text-[#4F46E5] font-medium' : 'text-gray-500'}`}>Address</span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  checkoutStep === 'payment'
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#818CF8]' 
                    : 'bg-gray-300'
                }`}>
                  <span className="text-white font-bold">3</span>
                </div>
                <span className={`text-sm ${checkoutStep === 'payment' ? 'text-[#4F46E5] font-medium' : 'text-gray-500'}`}>Payment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Render checkout step or cart based on current step */}
            {checkoutStep === 'cart' ? (
              // Cart content
              <>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">
                      Your Books ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)} items)
                    </h2>
                    {cartItems.length > 0 && (
                      <button
                        onClick={() => {
                          setCartItems([]);
                          localStorage.removeItem("bookCart");
                        }}
                        className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 text-gray-400">
                      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Looks like you haven't added any books to your cart yet.
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="px-8 py-3 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-lg font-medium hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90"
                    >
                      Browse Books
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={`${item.id}-${item.addedAt || Date.now()}`} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-[#4F46E5]/30 transition-all duration-300">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-40 h-52 bg-gradient-to-br from-[#4F46E5]/10 to-[#818CF8]/10 rounded-lg overflow-hidden">
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMxRjIxMjUiIHJ4PSIxMCIvPjxwYXRoIGQ9Ik0zMCAzNUMyNy4yNCAzNSAyNSAzMi43NiAyNSAzMEMyNSAyNy4yNCAyNy4yNCAyNSAzMCAyNUMzMi43NiAyNSAzNSAyNy4yNCMzNSAzMEMzNSAzMy43NiAzMi43NiAzNSAzMCAzNVpNNDAgNTBDNDAgNTEuMSAzOS4xIDUyIDM4IDUySDIyQzIwLjkgNTIgMjAgNTEuMSAyMCA1MFY0MkwyNyAzNUw0MCA0Ni41VjUwWiIgZmlsbD0iIzhDQ0NEQiIvPjwvc3ZnPg==";
                                  }}
                                />
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                  <p className="text-gray-600 mb-2">by {item.author || "Various Authors"}</p>

                                  <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-500">
                                      {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                      ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{item.rating || 4.8}/5</span>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <span className="text-sm text-gray-600">{item.category || "Programming"}</span>
                                  </div>

                                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                                </div>

                                <div className="text-right">
                                  <div className="text-2xl font-bold text-[#4F46E5]">₹{item.price}</div>
                                  {item.originalPrice && (
                                    <>
                                      <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                                      <div className="text-xs text-green-600 mt-1">Save ₹{item.originalPrice - item.price}</div>
                                    </>
                                  )}
                                </div>
                              </div>

                              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center">
                                  <button
                                    onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                    className="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                                  >
                                    -
                                  </button>
                                  <div className="w-12 h-8 bg-white border-y border-gray-200 flex items-center justify-center text-gray-900">
                                    {item.quantity || 1}
                                  </div>
                                  <button
                                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                    className="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
                                  >
                                    +
                                  </button>
                                  <span className="ml-4 text-gray-600 text-sm">
                                    Total: <span className="text-[#4F46E5] font-medium">₹{(item.price || 0) * (item.quantity || 1)}</span>
                                  </span>
                                </div>

                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
                                >
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              // Render checkout step (address or payment)
              renderCheckoutStep()
            )}
          </div>

          {/* Order Summary Sidebar - Always visible */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Fee</span>
                    <span className={shippingFee === 0 ? "text-green-600 font-medium" : "text-gray-900 font-medium"}>
                      {shippingFee === 0 ? "FREE" : `₹${shippingFee}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount ({appliedPromo})</span>
                      <span className="text-green-600 font-medium">-₹{discount}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#4F46E5]">₹{total}</div>
                      <div className="text-sm text-gray-500">Inclusive of all taxes</div>
                    </div>
                  </div>
                </div>

                {checkoutStep === 'cart' && (
                  <>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                      <div className="flex">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter promo code"
                          className="flex-1 bg-white border border-gray-300 rounded-l-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                        />
                        <button
                          onClick={applyPromoCode}
                          className="bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white px-6 py-3 rounded-r-lg font-medium hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && <p className="text-red-500 text-sm mt-2">{promoError}</p>}
                      {appliedPromo && <p className="text-green-600 text-sm mt-2">Promo code {appliedPromo} applied! 10% discount added.</p>}
                    </div>

                    <button
                      onClick={() => {
                        if (cartItems.length === 0) {
                          alert("Your cart is empty! Add some books first.");
                          return;
                        }
                        setCheckoutStep('address');
                      }}
                      disabled={cartItems.length === 0}
                      className={`w-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mb-4 ${
                        cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90"
                      }`}
                    >
                      {cartItems.length === 0 ? "Cart is Empty" : "Proceed to Checkout"}
                    </button>
                  </>
                )}

                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-4 mb-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">Secure Payment</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-xs">SSL Encrypted</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs">30-day money back guarantee • 24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Success Popup Modal */}
      {showPaymentSuccess && completedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 transform transition-all duration-300 scale-100 animate-fadeIn">
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful! 🎉</h3>
              <p className="text-gray-600">
                Your order has been placed successfully
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="text-gray-900 font-mono text-sm">{completedOrder.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-[#4F46E5] font-bold">₹{completedOrder.total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="text-gray-900">{completedOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Items:</span>
                  <span className="text-gray-900">{completedOrder.items.length} books</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleViewOrders}
                className="w-full py-3 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-xl font-semibold hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                View My Orders
              </button>
              <button
                onClick={handleContinueShopping}
                className="w-full py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleContinueShopping}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AddtoCart;