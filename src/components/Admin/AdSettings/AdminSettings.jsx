// src/components/admin/settings/AdminSettings.jsx
import React, { useState, useEffect } from "react";

const AdminSettings = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@bookmarkd.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: "BOOKMARK'D",
    siteEmail: "contact@bookmarkd.com",
    currency: "INR",
    shippingCharge: "50",
    taxRate: "18",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  // Load saved settings from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("adminProfile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setProfile({ ...profile, name: parsed.name, email: parsed.email });
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    }

    const savedSiteSettings = localStorage.getItem("siteSettings");
    if (savedSiteSettings) {
      try {
        setSiteSettings(JSON.parse(savedSiteSettings));
      } catch (error) {
        console.error("Error loading site settings:", error);
      }
    }
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 3000);
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSiteChange = (e) => {
    setSiteSettings({ ...siteSettings, [e.target.name]: e.target.value });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    if (!profile.name.trim() || !profile.email.trim()) {
      showMessage("error", "Name and email are required!");
      return;
    }

    const updatedProfile = {
      name: profile.name,
      email: profile.email,
    };
    
    localStorage.setItem("adminProfile", JSON.stringify(updatedProfile));
    showMessage("success", "Profile updated successfully!");
  };

  const updatePassword = (e) => {
    e.preventDefault();
    
    if (!profile.currentPassword) {
      showMessage("error", "Please enter current password!");
      return;
    }
    
    if (profile.newPassword.length < 6) {
      showMessage("error", "New password must be at least 6 characters!");
      return;
    }
    
    if (profile.newPassword !== profile.confirmPassword) {
      showMessage("error", "New passwords don't match!");
      return;
    }

    // Get saved admin password from localStorage or use default
    const savedAdminData = localStorage.getItem("adminData");
    let currentStoredPassword = "7714"; // default password
    
    if (savedAdminData) {
      try {
        const adminData = JSON.parse(savedAdminData);
        currentStoredPassword = adminData.password || "7714";
      } catch (error) {
        console.error("Error loading admin data:", error);
      }
    }
    
    // Verify current password
    if (profile.currentPassword !== currentStoredPassword) {
      showMessage("error", "Current password is incorrect!");
      return;
    }
    
    // Save new password
    const adminData = {
      username: "Mujibulla",
      password: profile.newPassword,
    };
    localStorage.setItem("adminData", JSON.stringify(adminData));
    
    // Clear password fields
    setProfile({
      ...profile,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    
    showMessage("success", "Password updated successfully!");
  };

  const saveSiteSettings = () => {
    if (!siteSettings.siteName.trim() || !siteSettings.siteEmail.trim()) {
      showMessage("error", "Site name and email are required!");
      return;
    }
    
    localStorage.setItem("siteSettings", JSON.stringify(siteSettings));
    showMessage("success", "Site settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>

        {/* Success/Error Message */}
        {message.text && (
          <div className={`p-4 rounded-lg ${
            message.type === "success" 
              ? "bg-green-50 border border-green-200 text-green-700" 
              : "bg-red-50 border border-red-200 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        {/* Profile Settings */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Settings</h2>
          <form onSubmit={updateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={handleProfileChange}
                name="name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
                name="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h2>
          <form onSubmit={updatePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={profile.currentPassword}
                onChange={handleProfileChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={profile.newPassword}
                onChange={handleProfileChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
                minLength="6"
              />
              <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleProfileChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Site Settings */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Site Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                name="siteName"
                value={siteSettings.siteName}
                onChange={handleSiteChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Email</label>
              <input
                type="email"
                name="siteEmail"
                value={siteSettings.siteEmail}
                onChange={handleSiteChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
              <select
                name="currency"
                value={siteSettings.currency}
                onChange={handleSiteChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Charge (₹)</label>
              <input
                type="number"
                name="shippingCharge"
                value={siteSettings.shippingCharge}
                onChange={handleSiteChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Rate (%)</label>
              <input
                type="number"
                name="taxRate"
                value={siteSettings.taxRate}
                onChange={handleSiteChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={saveSiteSettings}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;