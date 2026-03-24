import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sign = () => {
  
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Sign up data:", formData);
      
      // ✅ FIXED: Save user data to localStorage
      const userData = {
        name: formData.username,
        email: formData.email,
        phone: "",
        joinDate: new Date().toISOString().split('T')[0],
        address: {},
        preferences: {
          newsletter: false,
          emailNotifications: false,
          smsNotifications: false
        }
      };
      
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("userEmail", formData.email);
      
      alert("Account created successfully!");
      setIsSubmitting(false);
      
      // Redirect to home page after successful signup
      navigate("/");
    }, 1500);
  };

  // OAuth URLs - Replace with your actual OAuth endpoints
  const handleGoogleLogin = () => {
    window.open("https://accounts.google.com/signup", "_blank");
  };

  const handleGitHubLogin = () => {
    window.open("https://github.com/signup", "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#F5F6FA] overflow-hidden">
      {/* Animated background elements - same as HeroSections */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#4F46E5]/10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4F46E5 1px, transparent 1px),
                              linear-gradient(to bottom, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4F46E5]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white p-3 rounded-full">
                  {/* Add your logo here if needed */}
                </div>
              </div>
              <Link to="/" className="ml-3 text-2xl font-bold text-[#111827]">
                BOOK<span className="text-[#4F46E5]">MARK'D</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-[#111827] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#818CF8]">
              Create Your Account
            </h1>
            <p className="text-[#6B7280]">
              Join our developer community and access thousands of programming
              books
            </p>
          </div>

          <div className="animate-slide-up">
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="mb-6">
                <label className="block text-[#6B7280] text-sm font-medium mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="https://img.icons8.com/ios/50/6B7280/new-post.png"
                      alt="Email"
                      className="w-5 h-5 opacity-70"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/30 transition-all duration-300 hover:border-gray-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#6B7280] text-sm font-medium mb-3">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="https://img.icons8.com/ios/50/6B7280/user--v1.png"
                      alt="Username"
                      className="w-5 h-5 opacity-70"
                    />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/30 transition-all duration-300 hover:border-gray-300"
                    placeholder="Choose a username"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#6B7280] text-sm font-medium mb-3">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="https://img.icons8.com/ios/50/6B7280/lock--v1.png"
                      alt="Password"
                      className="w-5 h-5 opacity-70"
                    />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/30 transition-all duration-300 hover:border-gray-300"
                    placeholder="Create a secure password"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[#6B7280] text-sm font-medium mb-3">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img
                      src="https://img.icons8.com/ios/50/6B7280/lock--v1.png"
                      alt="Confirm Password"
                      className="w-5 h-5 opacity-70"
                    />
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/30 transition-all duration-300 hover:border-gray-300"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium text-white transition-all duration-300 mb-6 shadow-md ${
                  isSubmitting
                    ? "bg-[#818CF8] cursor-not-allowed"
                    : "bg-gradient-to-r from-[#4F46E5] to-[#818CF8] hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
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

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white/80 text-[#6B7280]">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full py-3 bg-white backdrop-blur-sm border border-gray-200 rounded-xl text-[#111827] hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm"
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
                  onClick={handleGitHubLogin}
                  className="w-full py-3 bg-white backdrop-blur-sm border border-gray-200 rounded-xl text-[#111827] hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/github.png"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Continue with GitHub</span>
                </button>
              </div>

              {/* Login Link - Moved after both buttons */}
              <div className="text-center mt-2 mb-2">
                <p className="text-[#6B7280]">
                  Already have an account?{" "}
                  <Link
                    to="/Loginpage"
                    className="text-[#4F46E5] hover:text-[#4F46E5]/80 font-medium hover:underline transition-all duration-300"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center animate-fade-in-delay">
            <p className="text-[#9CA3AF] text-sm">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="text-[#4F46E5] hover:text-[#4F46E5]/80 hover:underline transition-colors"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#4F46E5] hover:text-[#4F46E5]/80 hover:underline transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
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

export default Sign;