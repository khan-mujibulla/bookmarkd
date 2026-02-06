import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/"> {/* Changed from <a> to <Link> */}
            <div className="flex items-center space-x-2">
              <img 
                className="w-auto h-6 sm:h-7" 
                src="/images/logo.png" 
                alt="Logo" 
              />
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                BOOKMARK'D
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            {/* Cart icon for mobile */}
            <Link 
              to="/cart"  
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            transition-all duration-300 ease-in-out
            lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:dark:bg-transparent 
            lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center
            ${isOpen 
              ? 'absolute inset-x-0 z-20 w-full px-6 py-4 bg-white shadow-md dark:bg-gray-900 translate-x-0 opacity-100' 
              : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
            }
          `}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 lg:items-center">
            <Link 
              to="/"
              className="text-gray-700 lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/books" 
              className="text-gray-700 lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Books
            </Link>
            <Link 
              to="/contact"  
              className="text-gray-700 lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/about"  
              className="text-gray-700 lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/Loginpage"  
              className="text-gray-700 lg:mx-4 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            
            {/* Cart link for desktop - with icon only */}
            <Link 
              to="/AddtoCart"  
              className="lg:mx-4 flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              <span className="hidden lg:inline">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;