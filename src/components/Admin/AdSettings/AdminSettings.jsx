// src/components/admin/settings/AdminSettings.jsx
import React, { useState } from "react";

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

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSiteChange = (e) => {
    setSiteSettings({ ...siteSettings, [e.target.name]: e.target.value });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (profile.newPassword !== profile.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert("Password updated successfully!");
  };

  const saveSiteSettings = () => {
    alert("Site settings saved!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* Profile Settings */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={handleProfileChange}
              name="name"
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              name="email"
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            />
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Change Password</h2>
        <form onSubmit={updatePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={profile.currentPassword}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={profile.newPassword}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={handleProfileChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Site Settings */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Site Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Site Name</label>
            <input
              type="text"
              name="siteName"
              value={siteSettings.siteName}
              onChange={handleSiteChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Site Email</label>
            <input
              type="email"
              name="siteEmail"
              value={siteSettings.siteEmail}
              onChange={handleSiteChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Currency</label>
            <select
              name="currency"
              value={siteSettings.currency}
              onChange={handleSiteChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Shipping Charge</label>
            <input
              type="number"
              name="shippingCharge"
              value={siteSettings.shippingCharge}
              onChange={handleSiteChange}
              className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-xl text-white"
            />
          </div>
        </div>
        <button
          onClick={saveSiteSettings}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;