import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style/index.css";
import About from "./page/about";
import Home from "./page/Home";
import Books from "./page/Books";
import Contact from "./page/Contact";
import Sign from "./page/Sign";  // Import as "Sign" (original component name)
import Loginpage from "./page/Loginpage";
import AddtoCart from "./page/AddtoCart";
import Privacy from "./page/privacy";
import Terms from "./page/Terms";
import Cookiepage from "./page/Cookiepage";
import Search from "./page/Search";
import ForgotPassword from "./page/ForgotPassword";

// New User Pages Imports
import MyProfile from "./page/MyProfile";
import Orders from "./page/Orders";

// Admin Imports
import AdminLayout from "./components/Admin/Adlayout/AdminLayout";
import AdminLogin from "./page/AdminLogin";
import AdminDashboard from "./components/Admin/Dashbord/AdminDashbord";
import BookManagement from "./page/BookManagement";
import OrderManagement from "./components/Admin/OrderManagement/OrderManagement";
import UserManagement from "./components/Admin/User/UserManagement";
import CategoryManagement from "./components/Admin/Categories/CategoryManagement";
import AdminSettings from "./components/Admin/AdSettings/AdminSettings";

// Protected Route Component for User
const ProtectedUserRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/Loginpage" replace />;
  }
  return children;
};

// Protected Route Component for Admin
const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/AdminLogin" replace />;
  }
  return children;
};

function App() {
  const location = useLocation();
  
  const hideFooter = location.pathname === "/Loginpage" || 
                     location.pathname === "/Sign" ||  // "/Sign" se match karega
                     location.pathname === "/AdminLogin" ||
                     location.pathname === "/forgot-password" ||
                     location.pathname.startsWith("/admin") ||
                     location.pathname === "/profile" ||
                     location.pathname === "/orders";

  console.log("Current path:", location.pathname);
  console.log("Hide footer:", hideFooter);

  return (
    <>
      {/* Navbar - ALWAYS SHOWN */}
      <Navbar />

      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/AddtoCart" element={<AddtoCart />} />
            
            {/* SIGNUP ROUTE - Using "/Sign" to match Loginpage link */}
            <Route path="/Sign" element={<Sign />} />  
            
            <Route path="/Loginpage" element={<Loginpage />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Cookiepage" element={<Cookiepage />} />
            <Route path="/Search" element={<Search />} />
            
            {/* Forgot Password Route */}
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* User Protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedUserRoute>
                  <MyProfile />
                </ProtectedUserRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedUserRoute>
                  <Orders />
                </ProtectedUserRoute>
              }
            />

            {/* Admin Login */}
            <Route path="/AdminLogin" element={<AdminLogin />} />

            {/* Admin Routes with ProtectedRoute */}
            <Route
              path="/admin"
              element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="books" element={<BookManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>

            {/* Redirect old admin routes */}
            <Route
              path="/AdminDashboard"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route
              path="/BookManagement"
              element={<Navigate to="/admin/books" replace />}
            />
            <Route
              path="/OrderManagement"
              element={<Navigate to="/admin/orders" replace />}
            />
            <Route
              path="/UserManagement"
              element={<Navigate to="/admin/users" replace />}
            />
            <Route
              path="/Category"
              element={<Navigate to="/admin/categories" replace />}
            />
            <Route
              path="/Settings"
              element={<Navigate to="/admin/settings" replace />}
            />
            <Route path="/AdminLayout" element={<Navigate to="/admin" replace />} />

            {/* 404 Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Footer - Conditionally shown */}
        {!hideFooter && <Footer />}
      </div>
    </>
  );
}

export default App;