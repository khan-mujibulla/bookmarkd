import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Sign up data:", formData);
      alert("Account created successfully!");
      setIsSubmitting(false);
      navigate("/login");
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full">
                  <img 
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/bookmark--v1.png"
                    alt="BOOKMARK'D"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                BOOK<span className="text-cyan-300">MARK'D</span>
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Create Your Account
            </h1>
            <p className="text-gray-400">
              Join our developer community and access thousands of programming books
            </p>
          </div>

          {/* Form Card */}
          <div className="animate-slide-up">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
            >
              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img 
                      src="https://img.icons8.com/ios/50/FFFFFF/new-post.png"
                      alt="Email"
                      className="w-5 h-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Username Field */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img 
                      src="https://img.icons8.com/ios/50/FFFFFF/user--v1.png"
                      alt="Username"
                      className="w-5 h-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500"
                    placeholder="Choose a username"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img 
                      src="https://img.icons8.com/ios/50/FFFFFF/lock--v1.png"
                      alt="Password"
                      className="w-5 h-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500"
                    placeholder="Create a secure password"
                    required
                  />
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-8">
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img 
                      src="https://img.icons8.com/ios/50/FFFFFF/lock--v1.png"
                      alt="Confirm Password"
                      className="w-5 h-5 text-gray-400"
                    />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 mb-6 shadow-lg ${
                  isSubmitting
                    ? "bg-blue-800 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-gray-900/60 text-gray-400">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-4 mb-6">
                <button
                  type="button"
                  className="w-full py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <img 
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Continue with Google</span>
                </button>
                
                <button
                  type="button"
                  className="w-full py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <img 
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Continue with GitHub</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center pt-6 border-t border-gray-600/50">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/Loginpage"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Terms */}
          <div className="mt-8 text-center animate-fade-in-delay">
            <p className="text-gray-500 text-sm">
              By signing up, you agree to our{" "}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
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

export default SignUpPage;