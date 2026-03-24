// Card.jsx - Light Mode Version
import React, { useState } from "react";

const Card = ({ 
  id, 
  title, 
  description, 
  price, 
  imageUrl, 
  altText,
  onAddToCart,
  rating = 4.5,
  bestSeller = false 
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const book = {
      id,
      title,
      description,
      price,
      imageUrl,
      altText,
      quantity: 1,
      author: "Various Authors",
      category: "Programming",
      rating: rating,
      deliveryTime: "3-5 days",
      originalPrice: Math.round(price * 1.5),
      addedAt: Date.now(),
    };

    onAddToCart(book);
    setIsAdded(true);
    showNotification(`${title} added to cart!`);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const showNotification = (message) => {
    const existingNotification = document.querySelector(".cart-notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement("div");
    notification.className =
      "cart-notification fixed top-4 right-4 z-50 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white px-6 py-3 rounded-lg shadow-xl animate-bounce";
    notification.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        ${message}
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      if (notification.parentNode) {
        notification.classList.remove("animate-bounce");
        notification.classList.add("animate-fadeOut");
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
    }, 3000);
  };

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        );
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`halfStar-${id}-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="#FBBF24"/>
                <stop offset="50%" stopColor="#D1D5DB"/>
              </linearGradient>
            </defs>
            <path fill={`url(#halfStar-${id}-${i})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 m-4 overflow-hidden border border-gray-200 relative">
      {/* Best Seller Badge */}
      {bestSeller && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
            ⭐ Best Seller
          </div>
        </div>
      )}

      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
        <img
          className="object-contain w-full h-44"
          src={imageUrl}
          alt={altText}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxMCIvPjxwYXRoIGQ9Ik0zMCAzNUMyNy4yNCAzNSAyNSAzMi43NiAyNSAzMEMyNSAyNy4yNCAyNy4yNCAyNSAzMCAyNUMzMi43NiAyNSAzNSAyNy4yNCMzNSAzMEMzNSAzMy43NiAzMi43NiAzNSAzMCAzNVpNNDAgNTBDNDAgNTEuMSAzOS4xIDUyIDM4IDUySDIyQzIwLjkgNTIgMjAgNTEuMSAyMCA1MFY0MkwyNyAzNUw0MCA0Ni41VjUwWiIgZmlsbD0iIzhDQ0NEQiIvPjwvc3ZnPg==";
          }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#111827]">{title}</h3>
            <div className="flex items-center mt-1">
              <span className="text-sm text-[#6B7280]">Programming Book</span>
              <span className="mx-2 text-gray-400">•</span>
              <div className="text-xs px-2 py-1 bg-[#4F46E5]/10 text-[#4F46E5] font-medium rounded-full border border-[#4F46E5]/20">
                {rating >= 4.5 ? "Top Rated" : rating >= 4 ? "Best Rated" : "Popular"}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#4F46E5]">₹{price}</div>
            <div className="text-sm text-[#9CA3AF] line-through">
              ₹{(price * 1.5).toFixed(0)}
            </div>
          </div>
        </div>

        <p className="text-[#6B7280] text-sm mb-6 line-clamp-3">{description}</p>

        <div className="flex items-center mb-6">
          <div className="flex">
            {renderStars()}
          </div>
          <span className="ml-2 text-sm text-[#6B7280]">({rating.toFixed(1)}/5)</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-[#6B7280]">{Math.floor(Math.random() * 200) + 300} pages</span>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
              isAdded
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white transform scale-95"
                : "bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90"
            }`}
          >
            {isAdded ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        33% OFF
      </div>
    </div>
  );
};

export default Card;