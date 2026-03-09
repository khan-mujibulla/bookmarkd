import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/Loginpage");
      return;
    }

    // Get user data from localStorage (set during login/signup)
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    
    if (userData && userData.email) {
      setUser(userData);
      setEditedUser(userData);
    } else {
      // If no user data, redirect to login
      navigate("/Loginpage");
    }
    
    setLoading(false);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      address: {
        ...(prev.address || {}),
        [name]: value
      }
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setEditedUser(prev => ({
      ...prev,
      preferences: {
        ...(prev.preferences || {}),
        [name]: checked
      }
    }));
  };

  const handleSaveProfile = () => {
    localStorage.setItem("user", JSON.stringify(editedUser));
    setUser(editedUser);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancelEdit = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-24 h-24 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h3 className="text-xl font-bold text-white mb-2">No Profile Data</h3>
          <p className="text-gray-400">Please login to view your profile.</p>
          <button
            onClick={() => navigate("/Loginpage")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Profile
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{user.name || 'User'}</h2>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>

              {user.joinDate && (
                <div className="border-t border-gray-700 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Member since:</span>
                      <span className="text-white font-medium">{user.joinDate}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span>{isEditing ? "Cancel Edit" : "Edit Profile"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
              {!isEditing ? (
                // View Mode
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <label className="text-sm text-gray-400">Full Name</label>
                        <p className="text-white font-medium">{user.name || '—'}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <label className="text-sm text-gray-400">Email Address</label>
                        <p className="text-white font-medium">{user.email || '—'}</p>
                      </div>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <label className="text-sm text-gray-400">Phone Number</label>
                        <p className="text-white font-medium">{user.phone || '—'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Address
                    </h3>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      {user.address ? (
                        <p className="text-white">
                          {user.address.street && <>{user.address.street}<br /></>}
                          {user.address.city && user.address.state && user.address.pincode && 
                            <>{user.address.city}, {user.address.state} - {user.address.pincode}<br /></>
                          }
                          {user.address.country || ''}
                        </p>
                      ) : (
                        <p className="text-gray-400">No address added yet</p>
                      )}
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.newsletter ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                        <span className="text-gray-300">Newsletter Subscription</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.emailNotifications ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                        <span className="text-gray-300">Email Notifications</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.smsNotifications ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                        <span className="text-gray-300">SMS Notifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-white mb-4">Edit Profile</h3>
                  
                  {/* Personal Information Edit */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editedUser.name || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editedUser.email || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={editedUser.phone || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Address Edit */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Address</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          name="street"
                          value={editedUser.address?.street || ''}
                          onChange={handleAddressChange}
                          placeholder="Street Address"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="city"
                          value={editedUser.address?.city || ''}
                          onChange={handleAddressChange}
                          placeholder="City"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="state"
                          value={editedUser.address?.state || ''}
                          onChange={handleAddressChange}
                          placeholder="State"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="pincode"
                          value={editedUser.address?.pincode || ''}
                          onChange={handleAddressChange}
                          placeholder="Pincode"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="country"
                          value={editedUser.address?.country || ''}
                          onChange={handleAddressChange}
                          placeholder="Country"
                          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferences Edit */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Preferences</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={editedUser.preferences?.newsletter || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Receive newsletter</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          checked={editedUser.preferences?.emailNotifications || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">Email notifications</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          checked={editedUser.preferences?.smsNotifications || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-300">SMS notifications</span>
                      </label>
                    </div>
                  </div>

                  {/* Save/Cancel Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="px-6 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;