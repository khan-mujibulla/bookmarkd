// Terms.jsx - Light Mode Version
import React from "react";
import { Link } from "react-router-dom";
import Thero from "../components/Termshero/Thero";

const Terms = () => {
  return (
    <div>
      <Thero />
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
              Terms of Service
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
              <h2 className="text-2xl font-semibold text-[#111827] mt-6 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-[#6B7280] mb-6">
                By accessing our website or purchasing our products, you agree
                to be bound by these Terms of Service and all applicable laws
                and regulations. If you do not agree with any of these terms,
                you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-[#6B7280] mb-4">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                BOOKMARK'D and its licensors. Our trademarks and trade dress may
                not be used in connection with any product or service without
                our prior written consent.
              </p>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                User Representations
              </h2>
              <p className="text-[#6B7280] mb-4">
                By using the Service, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#6B7280] space-y-2">
                <li>You have the legal capacity to accept these Terms</li>
                <li>
                  You are not a person barred from receiving services under the
                  laws of your jurisdiction
                </li>
                <li>You are at least 18 years of age</li>
                <li>
                  You will not use the Service for any illegal or unauthorized
                  purpose
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Purchases and Payments
              </h2>
              <p className="text-[#6B7280] mb-4">
                We accept various payment methods. You agree to provide current,
                complete, and accurate purchase and account information for all
                purchases made via the Service. We reserve the right to refuse
                or cancel your order at any time for reasons including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-[#6B7280] space-y-2">
                <li>Product or service availability</li>
                <li>Errors in the description or price</li>
                <li>Suspected fraud or unauthorized transaction</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Prohibited Activities
              </h2>
              <p className="text-[#6B7280] mb-4">
                You may not access or use the Service for any purpose other than
                that for which we make the Service available. The Service may
                not be used in connection with any commercial endeavors except
                those that are specifically endorsed or approved by us.
              </p>

              <h2 className="text-2xl font-semibold text-[#111827] mt-8 mb-4">
                Termination
              </h2>
              <p className="text-[#6B7280] mb-6">
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever, including
                without limitation a breach of the Terms.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8 border border-yellow-200">
                <p className="text-[#6B7280] font-medium">
                  By using our Service, you acknowledge that you have read these
                  Terms of Service and agree to be bound by them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;