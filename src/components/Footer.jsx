import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Books", path: "/books" },
    { name: "Contact", path: "/contact" },
    { name: "Add to Cart", path: "/addtocart" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com",
      ariaLabel: "Instagram",
      svgPath:
        "M12.0003 2.00098C8.99776 2.00098 8.61766 2.01398 7.43976 2.06998C6.26476 2.12598 5.45676 2.31598 4.74876 2.59998C4.01547 2.89173 3.36393 3.35348 2.85076 3.94098C2.26425 4.45684 1.80309 5.1086 1.51076 5.84098C1.22676 6.55098 1.03676 7.35898 0.980762 8.53098C0.924762 9.71098 0.912762 10.091 0.912762 13.091C0.912762 16.091 0.925762 16.472 0.980762 17.652C1.03676 18.825 1.22676 19.632 1.51076 20.342C1.80268 21.0747 2.26392 21.7266 2.85076 22.242C3.36662 22.8286 4.01828 23.2899 4.75076 23.582C5.45776 23.866 6.26576 24.056 7.44076 24.112C8.61976 24.168 8.99876 24.181 12.0018 24.181C15.0048 24.181 15.3848 24.168 16.5628 24.112C17.7378 24.056 18.5448 23.866 19.2538 23.582C19.9863 23.2899 20.6379 22.8286 21.1538 22.242C21.7404 21.7261 22.2016 21.0743 22.4938 20.342C22.7768 19.632 22.9668 18.825 23.0228 17.652C23.0788 16.472 23.0918 16.092 23.0918 13.092C23.0918 10.092 23.0788 9.71198 23.0228 8.53198C22.9668 7.35898 22.7768 6.55198 22.4938 5.84198C22.2014 5.10944 21.7401 4.45764 21.1538 3.94098C20.6376 3.35453 19.9858 2.89349 19.2538 2.60098C18.5438 2.31698 17.7358 2.12698 16.5628 2.07098C15.3838 2.01498 15.0038 2.00198 12.0003 2.00198V2.00098ZM12.0003 4.03098C14.9428 4.03098 15.2938 4.04198 16.4578 4.09698C17.5118 4.14698 18.0828 4.30998 18.4588 4.44898C18.9578 4.62998 19.3138 4.84698 19.6838 5.21698C20.0538 5.58698 20.2698 5.94398 20.4518 6.44198C20.5908 6.81898 20.7528 7.38998 20.8038 8.44398C20.8558 9.60898 20.8638 9.95998 20.8638 12.902C20.8638 15.844 20.8528 16.195 20.8038 17.36C20.7528 18.414 20.5908 18.985 20.4518 19.361C20.2708 19.859 20.0538 20.216 19.6838 20.586C19.3138 20.956 18.9568 21.173 18.4588 21.354C18.0818 21.493 17.5118 21.656 16.4578 21.706C15.2938 21.757 14.9418 21.768 12.0003 21.768C9.05776 21.768 8.70676 21.757 7.54276 21.706C6.48876 21.655 5.91776 21.492 5.54176 21.354C5.04376 21.173 4.68676 20.956 4.31676 20.586C3.94676 20.216 3.72976 19.859 3.54876 19.361C3.40976 18.984 3.24776 18.413 3.19676 17.359C3.14576 16.195 3.13676 15.844 3.13676 12.901C3.13676 9.95898 3.14776 9.60798 3.19676 8.44398C3.24776 7.38998 3.40976 6.81898 3.54876 6.44298C3.72976 5.94498 3.94676 5.58798 4.31676 5.21798C4.68676 4.84798 5.04376 4.63098 5.54176 4.44998C5.91876 4.31098 6.48876 4.14798 7.54276 4.09698C8.70776 4.04598 9.05876 4.03498 12.0003 4.03498V4.03098ZM12.0003 7.17798C9.78876 7.17798 7.99676 8.96998 7.99676 11.181C7.99676 13.392 9.78876 15.184 12.0003 15.184C14.2118 15.184 16.0038 13.392 16.0038 11.181C16.0038 8.96998 14.2118 7.17798 12.0003 7.17798ZM12.0003 13.185C10.8948 13.185 9.99676 12.287 9.99676 11.181C9.99676 10.075 10.8948 9.17698 12.0003 9.17698C13.1058 9.17698 14.0038 10.075 14.0038 11.181C14.0038 12.287 13.1058 13.185 12.0003 13.185ZM17.0568 6.93098C17.0568 7.50098 16.5968 7.95998 16.0278 7.95998C15.4578 7.95998 14.9988 7.49998 14.9988 6.93098C14.9988 6.36198 15.4578 5.90298 16.0278 5.90298C16.5968 5.90298 17.0568 6.36198 17.0568 6.93098Z",
    },
    {
      href: "https://facebook.com",
      ariaLabel: "Facebook",
      svgPath:
        "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
    },
    {
      href: "https://github.com",
      ariaLabel: "Github",
      svgPath:
        "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
    },
  ];

  // Programming categories for BOOKMARK'D
  const bookCategories = [
    "Frontend Development",
    "Backend Development", 
    "Mobile Development",
    "Data Science & ML",
    "Cloud Computing",
    "DevOps",
    "Database Systems",
    "Cybersecurity"
  ];

  const usefulLinks = [
    "Secure Shopping",
    "Privacy Policy",
    "Terms of Use",
    "Shipping Policy",
    "Returns Policy",
    "Payment Options",
    "Gift Card T&C"
  ];

  const aboutLinks = [
    "About BOOKMARK'D",
    "Store Locator",
    "Blogs",
    "Careers",
    "Become a Affiliate",
    "Contact Us"
  ];

  const popularSearches = [
    "JavaScript Books",
    "Python Programming",
    "React.js Guide",
    "Machine Learning",
    "Data Structures",
    "Java Development",
    "C++ Programming",
    "Cloud Computing",
    "DevOps Tools",
    "Cybersecurity",
    "Web Development",
    "Mobile App Development"
  ];

  return (
    <footer className="bg-[#0A1929] text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              className="w-auto h-8"
              src="/images/logo.png"
              alt="BOOKMARK'D Logo"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop destination for the best programming books. From beginner guides to advanced references, we have everything you need for your coding journey.
            </p>
            <div className="space-y-2 pt-2">
              <a href="mailto:hello@bookmarkd.com" className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@bookmarkd.com
              </a>
              <a href="tel:+918530206759" className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 85302 06759
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2">
              {bookCategories.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Searches Section */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((item) => (
              <a key={item} href="#" className="text-xs px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-800 pt-6">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-105"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map((social) => (
            <a
              key={social.ariaLabel}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:text-pink-500 hover:scale-110"
              aria-label={social.ariaLabel}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.svgPath} />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} BOOKMARK'D. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors" onClick={handleLinkClick}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors" onClick={handleLinkClick}>
              Terms of Service
            </Link>
            <Link to="/cookiepage" className="hover:text-blue-400 transition-colors" onClick={handleLinkClick}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;