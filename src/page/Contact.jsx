import React, { useState } from "react";
import Contacthero from "../components/Contecthero/ContactHero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Contacthero />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Contact BOOKMARK'D
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about orders or books? Our team is here to help you
              find the perfect read.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 h-full border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <span className="bg-blue-900/30 text-blue-400 p-2 rounded-lg mr-3 border border-blue-800/50">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30">
                    <div className="flex items-start">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          Phone Support
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-300 font-medium">
                            +91 6351559214
                          </p>
                          <p className="text-gray-300 font-medium">
                            +91 7490076413
                          </p>
                          <p className="text-gray-300 font-medium">
                            +91 7861894244
                          </p>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Available 9am-8pm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:shadow-lg transition-all duration-300 hover:border-purple-500/30">
                    <div className="flex items-start">
                      <div className="bg-purple-600 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-white"
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
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          Email Support
                        </h3>
                        <div className="space-y-2">
                          <a
                            href="mailto:mujibullakhan41@gmail.com"
                            className="block text-blue-400 hover:text-blue-300 transition-colors font-medium"
                          >
                            mujibullakhan41@gmail.com
                          </a>
                          <a
                            href="mailto:abdulrehmanmodasiya@gmail.com"
                            className="block text-blue-400 hover:text-blue-300 transition-colors font-medium"
                          >
                            modasiya178@gmail.com
                          </a>
                          <a
                            href="mailto:mdevang69@gmail.com"
                            className="block text-blue-400 hover:text-blue-300 transition-colors font-medium"
                          >
                            mdevang69@gmail.com
                          </a>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:shadow-lg transition-all duration-300 hover:border-green-500/30">
                    <div className="flex items-start">
                      <div className="bg-green-600 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">
                          Working Hours
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-300 font-medium">
                            Monday - Friday: 9am - 8pm
                          </p>
                          <p className="text-gray-300 font-medium">
                            Saturday: 10am - 6pm
                          </p>
                          <p className="text-gray-300 font-medium">
                            Sunday: 11am - 5pm
                          </p>
                        </div>
                        <p className="text-sm text-green-400 font-medium mt-2">
                          Always here to help!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-900/20 rounded-xl border border-yellow-800/50">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400 mr-2"
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
                    Quick Tip
                  </h4>
                  <p className="text-sm text-gray-300">
                    For faster order assistance, please include your order
                    number in your message. Our average response time is less
                    than 24 hours!
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
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
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
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
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="pl-10 w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                        placeholder="How can we assist you today? Please include any relevant details..."
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                      <div className="bg-blue-900/30 p-3 rounded-lg mr-4 border border-blue-800/50">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Secure Communication
                        </h4>
                        <p className="text-sm text-gray-400">
                          Your information is encrypted and secure
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-900/30 p-3 rounded-lg mr-4 border border-green-800/50">
                        <svg
                          className="w-6 h-6 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Fast Response
                        </h4>
                        <p className="text-sm text-gray-400">
                          Typically reply within 4-6 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">BOOKMARK'D</span>
            </div>
            <p className="text-gray-400">
              Your trusted online bookstore since 2026 • Making reading
              accessible to everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
