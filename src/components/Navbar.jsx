import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check login status on mount and when location changes
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
    
    // Redirect to login if not logged in and not on login page - FIXED: "/Sign" instead of "/SignupPage"
    if (!loggedInStatus && location.pathname !== "/Loginpage" && location.pathname !== "/Sign") {
      navigate("/Loginpage");
    }
  }, [location.pathname, navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.account-dropdown')) {
        setIsAccountDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll to top function
  const handleLinkClick = (path) => {
    setIsOpen(false);
    setIsAccountDropdownOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Check if trying to access protected routes without login - FIXED: "/Sign" instead of "/SignupPage"
    if (path !== "/Loginpage" && path !== "/Sign" && path !== "/" && !isLoggedIn) {
      navigate("/Loginpage");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && isLoggedIn) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
    } else if (!isLoggedIn) {
      navigate("/Loginpage");
    }
  };

  const handleLoginClick = () => {
    navigate("/Loginpage");
    setIsOpen(false);
    setIsAccountDropdownOpen(false);
  };

  const handleSignupClick = () => {
    navigate("/Sign"); // FIXED: "/Sign" instead of "/SignupPage"
    setIsOpen(false);
    setIsAccountDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/Loginpage");
    setIsOpen(false);
    setIsAccountDropdownOpen(false);
  };

  // Protected link click handler
  const handleProtectedLinkClick = (path) => {
    if (!isLoggedIn) {
      navigate("/Loginpage");
    } else {
      navigate(path);
      handleLinkClick(path);
    }
  };

  // Account dropdown toggle
  const toggleAccountDropdown = () => {
    if (isLoggedIn) {
      setIsAccountDropdownOpen(!isAccountDropdownOpen);
    } else {
      navigate("/Loginpage");
    }
  };

  // Don't show navbar on login or signup page - FIXED: "/Sign" instead of "/SignupPage"
  if (location.pathname === "/Loginpage" || location.pathname === "/Sign") {
    return null;
  }

  return (
    <section className="bg-[#0A1929] sticky top-0 z-50 shadow-md">
      <nav className="container px-3 sm:px-4 md:px-6 mx-auto">
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:py-3">
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <div className="flex items-center space-x-2 group">
              <img
                className="w-auto h-6 transform group-hover:scale-110 transition-transform duration-300"
                src="/images/logo.png"
                alt="Logo"
              />
              <span className="text-lg font-bold text-gray-800 dark:text-white relative overflow-hidden">
                BOOKMARK'D
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isLoggedIn ? "Search books, technologies..." : "Login to search"}
                  disabled={!isLoggedIn}
                  className="w-full px-3 py-1.5 pl-8 pr-8 bg-gray-800/50 border border-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="w-4 h-4 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  disabled={!isLoggedIn}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation - Rest of your code remains exactly the same */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleProtectedLinkClick("/")}
              className="px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </button>

            <button
              onClick={() => handleProtectedLinkClick("/contact")}
              className="px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4"
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
              <span>Contact</span>
            </button>

            <button
              onClick={() => handleProtectedLinkClick("/about")}
              className="px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>About</span>
            </button>

            {/* Account Dropdown */}
            <div className="relative account-dropdown">
              <button
                onClick={toggleAccountDropdown}
                className="px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-4 h-4"
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
                <span>Account</span>
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-200 ${isAccountDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button
                    onClick={() => handleProtectedLinkClick("/")}
                    className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Home</span>
                  </button>
                  
                  <button
                    onClick={() => handleProtectedLinkClick("/profile")}
                    className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>My Profile</span>
                  </button>
                  
                  <button
                    onClick={() => handleProtectedLinkClick("/orders")}
                    className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 text-left"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Orders</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleProtectedLinkClick("/AddtoCart")}
              className="px-2.5 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center space-x-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Cart</span>
            </button>

            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleSignupClick}
                  className="ml-1 px-3 py-1.5 text-sm bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                  <span>Sign Up</span>
                </button>
                <button
                  onClick={handleLoginClick}
                  className="ml-1 px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Login</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="ml-1 p-1.5 text-sm bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  title="Logout"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Layout - Keep exactly as your original */}
        <div className="lg:hidden py-2">
          {/* ... your original mobile code stays exactly the same ... */}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;