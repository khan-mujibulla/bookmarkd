// Privacy.jsx - Light Mode Version
import React from "react";
import { Link } from "react-router-dom";
import Phero from "../components/Privcyhero/Phero";

const Privacy = () => {
  return (
    <div>
      <Phero />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center text-[#4F46E5] hover:text-[#4F46E5]/80 mb-8 transition-colors"
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

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 md:p-12 border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#6B7280] mb-8">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">
                At{" "}
                <span className="font-semibold text-[#4F46E5]">
                  BOOKMARK'D
                </span>
                , we take your privacy seriously. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website or make a purchase.
              </p>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-[#6B7280] mb-4">
                We collect personal information that you voluntarily provide to
                us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#6B7280] space-y-2">
                <li>Register on the Services</li>
                <li>
                  Express an interest in obtaining information about us or our
                  products
                </li>
                <li>Participate in activities on the Services</li>
                <li>
                  Contact us via email, phone, or other communication channels
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[#6B7280] mb-4">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#6B7280] space-y-2">
                <li>Facilitate account creation and login process</li>
                <li>Manage user accounts</li>
                <li>Fulfill and manage orders</li>
                <li>Deliver targeted advertising</li>
                <li>
                  Request feedback and contact you about your use of the
                  Services
                </li>
                <li>Protect our Services and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Sharing Your Information
              </h2>
              <p className="text-[#6B7280] mb-6">
                We may process or share your data based on:
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#6B7280] space-y-2">
                <li>
                  <span className="font-semibold text-[#111827]">
                    Legitimate Business Interests:
                  </span>{" "}
                  To operate our business and provide our services
                </li>
                <li>
                  <span className="font-semibold text-[#111827]">
                    Performance of a Contract:
                  </span>{" "}
                  To fulfill our terms of service
                </li>
                <li>
                  <span className="font-semibold text-[#111827]">
                    Compliance with Legal Obligations:
                  </span>{" "}
                  When required by law
                </li>
                <li>
                  <span className="font-semibold text-[#111827]">
                    Your Consent:
                  </span>{" "}
                  When you have given us explicit permission
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-[#6B7280] mb-2">
                If you have questions or comments about this policy, you may
                contact us at:
              </p>
              <div className="bg-[#4F46E5]/5 p-6 rounded-lg mt-4 border border-[#4F46E5]/20">
                <p className="text-[#6B7280]">
                  <span className="font-semibold text-[#111827]">Email:</span>{" "}
                  bookmarkd@gemail.com
                  <br />
                  <span className="font-semibold text-[#111827]">Address:</span>{" "}
                  123 Book Street, Reading City, RC 12345
                  <br />
                  <span className="font-semibold text-[#111827]">Phone:</span>{" "}
                  +91 6351559214
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;