// src/components/admin/layout/AdminLayout.jsx
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] overflow-hidden relative">
      {/* Floating Particles - Same as your hero section */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#4F46E5]/10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
        
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #4F46E5 1px, transparent 1px),
                              linear-gradient(to bottom, #4F46E5 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Blurred Circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } min-h-screen bg-white/80 backdrop-blur-sm border-r border-slate-200 transition-all duration-300`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <h2
                className={`font-bold text-slate-800 ${
                  sidebarOpen ? "text-xl" : "text-sm"
                }`}
              >
                {sidebarOpen ? "BOOKMARK'D Admin" : "BMD"}
              </h2>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-500 hover:text-slate-700"
              >
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
                    d={sidebarOpen ? "M11 19l-7-7 7-7" : "M13 5l7 7-7 7"}
                  />
                </svg>
              </button>
            </div>

            <nav className="space-y-2">
              <NavItem
                to="/admin/dashboard"
                icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                text="Dashboard"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/admin/books"
                icon="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                text="Books"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/admin/orders"
                icon="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                text="Orders"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/admin/users"
                icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                text="Users"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/admin/categories"
                icon="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                text="Categories"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/admin/settings"
                icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                text="Settings"
                sidebarOpen={sidebarOpen}
              />
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200">
            <div className="flex items-center justify-between px-6 py-4">
              <h1 className="text-2xl font-bold text-slate-800">
                Welcome back, Admin
              </h1>
              <div className="flex items-center space-x-4">
                <button className="relative text-slate-600 hover:text-slate-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-[#4F46E5] rounded-full"></span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4F46E5] to-[#4F46E5]/80 rounded-lg hover:from-[#4F46E5]/90 hover:to-[#4F46E5]/70 transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">
            <div
              className={`transform transition-all duration-1000 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

// Sidebar Navigation Item Component
const NavItem = ({ to, icon, text, sidebarOpen }) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-3 text-slate-700 hover:text-[#4F46E5] hover:bg-slate-100 rounded-lg transition-all duration-300 group"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </Link>
  );
};

export default AdminLayout;