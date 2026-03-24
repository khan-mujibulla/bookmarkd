import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Phero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-[#4F46E5]/5 via-white to-[#818CF8]/5 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#818CF8]/20"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, #4F46E5 1px, transparent 1px),
                              linear-gradient(to bottom, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className={`inline-flex items-center text-[#6B7280] hover:text-[#4F46E5] mb-12 transition-all duration-1000 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>

            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#818CF8] rounded-2xl flex items-center justify-center shadow-xl">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#111827]">
                Privacy Policy
              </h1>

              <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
                We value your trust and are committed to protecting your
                personal information. Read on to understand how we handle your
                data.
              </p>

              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4F46E5]">GDPR</div>
                  <div className="text-sm text-[#6B7280] mt-1">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4F46E5]">AES-256</div>
                  <div className="text-sm text-[#6B7280] mt-1">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4F46E5]">24/7</div>
                  <div className="text-sm text-[#6B7280] mt-1">Monitoring</div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#privacy-content"
                  className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-[#4F46E5] rounded-xl hover:bg-white transition-all duration-300 shadow-sm"
                >
                  <span>Read Privacy Policy</span>
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-[#4F46E5]/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#4F46E5] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Phero;