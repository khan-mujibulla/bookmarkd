import React, { useState } from 'react';

const AddtoCart = () => {
  // Start with empty cart
  const [cartItems, setCartItems] = useState([]);

  // Promo code state
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Order summary calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 999 ? 0 : 49;
  const discount = appliedPromo ? subtotal * 0.1 : 0; // 10% discount for valid promo
  const total = subtotal + shippingFee - discount;

  // Handle quantity changes
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    setPromoError('');
    
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }
    
    // Check valid promo codes
    const validPromoCodes = ['BOOK10', 'BOOKMARK20', 'READMORE15'];
    
    if (validPromoCodes.includes(promoCode.toUpperCase())) {
      setAppliedPromo(promoCode.toUpperCase());
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty! Add some books first.');
      return;
    }
    alert('Proceeding to checkout...');
    // In a real app, this would redirect to checkout page
  };

  // Function to add a book to cart (you can call this from your book cards)
  const addBookToCart = (book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      
      if (existingItem) {
        // If book already in cart, increase quantity
        return prevItems.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If book not in cart, add it with quantity 1
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  // Sample books you can add (these would come from your books page)
  const sampleBooks = [
    {
      id: 1,
      title: "JavaScript ES6+",
      author: "David Flanagan",
      price: 799,
      originalPrice: 1299,
      imageUrl: "/images/js.png",
      description: "Complete guide to modern JavaScript with ES6+ features",
      category: "Programming",
      rating: 4.8,
      deliveryTime: "2-3 days"
    },
    {
      id: 2,
      title: "Python Mastery",
      author: "Mark Lutz",
      price: 849,
      originalPrice: 1499,
      imageUrl: "/images/pythom.png",
      description: "From basics to advanced Python programming",
      category: "Programming",
      rating: 4.9,
      deliveryTime: "3-4 days"
    },
    {
      id: 3,
      title: "React.js Guide",
      author: "Alex Banks & Eve Porcello",
      price: 899,
      originalPrice: 1599,
      imageUrl: "/images/React.png",
      description: "Complete React.js guide with hooks and advanced patterns",
      category: "Frontend",
      rating: 4.7,
      deliveryTime: "1-2 days"
    }
  ];

  // Recommended books
  const recommendedBooks = [
    {
      id: 4,
      title: "Node.js Backend",
      price: 799,
      imageUrl: "/images/Node_js.png",
      rating: 4.6
    },
    {
      id: 5,
      title: "Data Structures",
      price: 849,
      imageUrl: "/images/DSA.png",
      rating: 4.8
    },
    {
      id: 6,
      title: "Machine Learning",
      price: 1399,
      imageUrl: "/images/AI_ML.png",
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-gray-300 text-lg">
            Review your selected books and proceed to checkout
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <span className="text-cyan-300 text-sm">Cart</span>
              </div>
              <div className="w-16 h-1 bg-gray-700"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-400 font-bold">2</span>
                </div>
                <span className="text-gray-400 text-sm">Checkout</span>
              </div>
              <div className="w-16 h-1 bg-gray-700"></div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-400 font-bold">3</span>
                </div>
                <span className="text-gray-400 text-sm">Confirmation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2">
            {/* Cart Header */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  Your Books ({cartItems.length} items)
                </h2>
                {cartItems.length > 0 && (
                  <button 
                    onClick={() => setCartItems([])}
                    className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {/* Empty Cart State */}
            {cartItems.length === 0 ? (
              <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-500">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Looks like you haven't added any books to your cart yet. 
                  Start shopping to find amazing programming books!
                </p>
                <div className="space-y-4 max-w-md mx-auto">
                  {/* Add Sample Books Buttons */}
                  <p className="text-gray-300 text-sm mb-4">Try adding some books:</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {sampleBooks.map((book) => (
                      <button
                        key={book.id}
                        onClick={() => addBookToCart(book)}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-colors"
                      >
                        Add {book.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Cart Items when not empty */
              <>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Book Image */}
                        <div className="flex-shrink-0">
                          <div className="w-40 h-52 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-4xl text-gray-300">📚</div>
                            </div>
                          </div>
                        </div>

                        {/* Book Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                              <p className="text-gray-400 mb-2">by {item.author}</p>
                              
                              {/* Rating */}
                              <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-400">{item.rating}/5</span>
                                <span className="mx-2 text-gray-600">•</span>
                                <span className="text-sm text-gray-400">{item.category}</span>
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                              
                              {/* Delivery Info */}
                              <div className="flex items-center text-sm text-gray-400 mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Delivery: {item.deliveryTime}
                              </div>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="text-2xl font-bold text-cyan-400">₹{item.price}</div>
                              <div className="text-sm text-gray-500 line-through">₹{item.originalPrice}</div>
                              <div className="text-xs text-green-400 mt-1">
                                Save ₹{item.originalPrice - item.price}
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
                            {/* Quantity Control */}
                            <div className="flex items-center">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-700 rounded-l-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors"
                              >
                                -
                              </button>
                              <div className="w-12 h-8 bg-gray-900 flex items-center justify-center text-white">
                                {item.quantity}
                              </div>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-gray-700 rounded-r-lg flex items-center justify-center text-gray-300 hover:bg-gray-600 transition-colors"
                              >
                                +
                              </button>
                              <span className="ml-4 text-gray-400 text-sm">
                                Total: <span className="text-cyan-300 font-medium">₹{item.price * item.quantity}</span>
                              </span>
                            </div>

                            {/* Remove Button */}
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center"
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

                {/* Recommended Books */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-6">You might also like</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recommendedBooks.map((book) => (
                      <div key={book.id} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg"></div>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{book.title}</h4>
                            <div className="flex items-center mb-2">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="ml-1 text-xs text-gray-400">{book.rating}</span>
                            </div>
                            <div className="text-lg font-bold text-cyan-400">₹{book.price}</div>
                            <button 
                              onClick={() => addBookToCart({
                                ...book,
                                author: "Various Authors",
                                description: "Complete guide to " + book.title,
                                originalPrice: Math.round(book.price * 1.5),
                                category: "Programming",
                                deliveryTime: "3-5 days"
                              })}
                              className="mt-2 text-sm text-cyan-300 hover:text-cyan-200 font-medium"
                            >
                              + Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Order Summary Card */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Summary Items */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping Fee</span>
                    <span className={shippingFee === 0 ? "text-green-400 font-medium" : "text-white font-medium"}>
                      {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount ({appliedPromo})</span>
                      <span className="text-green-400 font-medium">-₹{discount}</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Total</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">₹{total}</div>
                      <div className="text-sm text-gray-400">Inclusive of all taxes</div>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-red-400 text-sm mt-2">{promoError}</p>
                  )}
                  {appliedPromo && (
                    <p className="text-green-400 text-sm mt-2">
                      Promo code {appliedPromo} applied! 10% discount added.
                    </p>
                  )}
                  <p className="text-gray-400 text-xs mt-2">
                    Try: BOOK10, BOOKMARK20, READMORE15
                  </p>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mb-4 ${
                    cartItems.length === 0 
                      ? 'opacity-50 cursor-not-allowed hover:from-blue-600 hover:to-purple-600' 
                      : 'hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {cartItems.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
                </button>

                {/* Security Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-3">
                    <div className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">Secure Payment</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-xs">SSL Encrypted</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">
                    30-day money back guarantee • 24/7 customer support
                  </p>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Shipping Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Free Shipping</h4>
                      <p className="text-gray-400 text-sm">On orders above ₹999</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Fast Delivery</h4>
                      <p className="text-gray-400 text-sm">Typically 2-4 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Easy Returns</h4>
                      <p className="text-gray-400 text-sm">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <a 
            href="/books"
            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Continue Shopping
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Happy Readers</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4.8★</div>
            <div className="text-gray-300">Customer Rating</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">30D</div>
            <div className="text-gray-300">Return Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;