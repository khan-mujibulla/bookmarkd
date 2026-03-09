import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "", // Added username field
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    // Check if already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate all fields including username
    if (!formData.email || !formData.password || !formData.username) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Username validation (optional - you can customize this)
    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      if (formData.email && formData.password && formData.username) {
        // ✅ FIXED: Get existing user data or create new
        const existingUserData = JSON.parse(localStorage.getItem("user") || "{}");
        
        const userData = {
          name: formData.username, // Use username as name
          username: formData.username, // Store username separately
          email: formData.email,
          phone: existingUserData.phone || '',
          joinDate: existingUserData.joinDate || new Date().toISOString().split('T')[0],
          address: existingUserData.address || {},
          preferences: existingUserData.preferences || {
            newsletter: false,
            emailNotifications: false,
            smsNotifications: false
          }
        };

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("username", formData.username); // Store username separately for easy access

        console.log("Login successful:", formData.email, formData.username);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Animated background elements - same as your original */}
      <div className="absolute inset-0">
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

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 w-full p-8 rounded-2xl relative bg-gray-900/60 backdrop-blur-xl text-white border border-gray-700/50 shadow-2xl transform transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            {/* Header with animated dot */}
            <div className="relative flex items-center mb-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75"></div>
                <div className="relative w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
              <p className="text-2xl font-semibold tracking-tight ml-3">
                Welcome Back
              </p>
              <div className="absolute w-5 h-5 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-75"></div>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              Login to access your bookmarks and personalized recommendations.
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Username Input - NEW */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
                autoComplete="username"
                minLength="3"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                className="w-full pl-10 px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-400">
                <input
                  type="checkbox"
                  className="rounded bg-gray-800 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span>Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 py-3 rounded-xl font-medium text-white transition-all duration-300 ${
                isSubmitting
                  ? "bg-blue-800 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>

            {/* Sign Up Link - FIXED: to="/Sign" */}
            <p className="text-center text-sm text-gray-400 mt-2">
              Don't have an account?{" "}
              <Link
                to="/Sign"
                className="text-blue-400 hover:text-blue-300 transition-colors hover:underline font-medium"
              >
                Sign up here
              </Link>
            </p>
          </form>
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
      `}</style>
    </div>
  );
};

export default Loginpage;