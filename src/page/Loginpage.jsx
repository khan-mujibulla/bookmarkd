import React, { useState } from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login data:", formData);
      alert("Login successful!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements - Full Screen */}
      <div className="absolute inset-0">
        {/* Floating Particles - Full Screen */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Grid Pattern - Full Screen */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Orbs - Full Screen */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md w-full p-8 rounded-2xl relative bg-gray-900/60 backdrop-blur-xl text-white border border-gray-700/50 shadow-2xl"
        >
          {/* Animated Title */}
          <div className="relative flex items-center mb-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75"></div>
              <div className="relative w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
            <p className="text-2xl font-semibold tracking-tight ml-3">Login</p>
            <div className="absolute w-5 h-5 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-75"></div>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            Login now and get full access to our app.
          </p>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img 
                src="https://img.icons8.com/ios/50/FFFFFF/new-post.png"
                alt="Email"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img 
                src="https://img.icons8.com/ios/50/FFFFFF/lock--v1.png"
                alt="Password"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img 
                src="https://img.icons8.com/ios/50/FFFFFF/lock--v1.png"
                alt="Confirm Password"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-2 py-3 rounded-xl font-medium text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:scale-[1.02]"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {/* Signin Link */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/SignUpPage"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors hover:underline"
            >
              Signin
            </Link>
          </p>
        </form>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Loginpage;