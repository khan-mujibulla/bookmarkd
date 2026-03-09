// src/page/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    // Simulate password reset email
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
        <h2 className="text-2xl font-bold text-white mb-2">Forgot Password?</h2>
        <p className="text-gray-400 mb-6">
          No worries! Enter your email and we'll send you reset instructions.
        </p>

        {isSubmitted ? (
          <div className="text-center">
            <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg mb-4">
              Password reset link sent to your email!
            </div>
            <Link
              to="/Loginpage"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg mb-4">
                {error}
              </div>
            )}
            
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-blue-500 mb-4"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 rounded-xl text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
            >
              Send Reset Link
            </button>

            <div className="text-center mt-4">
              <Link
                to="/Loginpage"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;