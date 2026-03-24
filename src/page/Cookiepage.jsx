import React from "react";
import { Link } from "react-router-dom";
import Chero from "../components/Cookiehero/Chero";

const Cookiepage = () => {
  return (
    <div>
      <Chero />
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#F59E0B] mb-8 transition-colors"
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

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Cookie Policy explains how{" "}
                <span className="font-semibold text-[#F59E0B]">
                  BOOKMARK'D
                </span>{" "}
                uses cookies and similar technologies to recognize you when you
                visit our website. It explains what these technologies are and
                why we use them, as well as your rights to control our use of
                them.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-700 mb-6">
                Cookies are small data files that are placed on your computer or
                mobile device when you visit a website. Cookies are widely used
                by website owners to make their websites work more efficiently,
                as well as to provide reporting information and personalize your
                experience.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Types of Cookies We Use
              </h2>

              <div className="space-y-6 mb-6">
                <div className="bg-amber-50/80 p-5 rounded-lg border border-amber-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🍪 Essential Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies are necessary to provide you with services
                    available through our website and to use some of its
                    features, such as accessing secure areas. Without these
                    cookies, services you've asked for cannot be provided.
                  </p>
                </div>

                <div className="bg-amber-50/80 p-5 rounded-lg border border-amber-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🎨 Functionality Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies allow our website to remember choices you make
                    (such as your username, language, or region) and provide
                    enhanced, more personal features. They may also be used to
                    remember changes you've made to text size, fonts, and other
                    customizable elements.
                  </p>
                </div>

                <div className="bg-amber-50/80 p-5 rounded-lg border border-amber-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📊 Analytics and Performance Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies are used to collect information about traffic
                    to our website and how users use our website. The
                    information collected does not identify any individual
                    visitor and is aggregated to help us improve our website.
                  </p>
                </div>

                <div className="bg-amber-50/80 p-5 rounded-lg border border-amber-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    🎯 Advertising Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies are used to make advertising messages more
                    relevant to you and your interests. They also perform
                    functions like preventing the same ad from continuously
                    reappearing and ensuring that ads are properly displayed.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How Can You Control Cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject
                cookies. You can set or amend your web browser controls to
                accept or refuse cookies. If you choose to reject cookies, you
                may still use our website though your access to some
                functionality and areas may be restricted.
              </p>
              <p className="text-gray-700 mb-6">
                Most web browsers allow you to control cookies through their
                settings preferences. However, if you limit the ability of
                websites to set cookies, you may worsen your overall user
                experience and lose functionality.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, regulation, or our business practices.
                Any updates will become effective upon posting of the revised
                Cookie Policy on our website.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg mt-8 border border-amber-100">
                <p className="text-gray-700">
                  <span className="font-semibold">Questions?</span> If you have
                  any questions about our use of cookies, please contact us at{" "}
                  <a
                    href="mailto:privacy@bookmarkd.com"
                    className="text-[#F59E0B] hover:text-[#F59E0B]/80 hover:underline"
                  >
                    privacy@bookmarkd.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookiepage;