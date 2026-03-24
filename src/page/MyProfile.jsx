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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4F46E5]"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200">
          <svg className="w-24 h-24 text-[#9CA3AF] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h3 className="text-xl font-bold text-[#111827] mb-2">No Profile Data</h3>
          <p className="text-[#6B7280]">Please login to view your profile.</p>
          <button
            onClick={() => navigate("/Loginpage")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-lg hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 transition-all duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#818CF8]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#4F46E5]">
            My Profile
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 border border-gray-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#111827]">{user.name || 'User'}</h2>
                <p className="text-[#6B7280] text-sm">{user.email}</p>
              </div>

              {user.joinDate && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Member since:</span>
                      <span className="text-[#111827] font-medium">{user.joinDate}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#818CF8] text-white rounded-lg hover:from-[#4F46E5]/90 hover:to-[#818CF8]/90 transition-all duration-300 flex items-center justify-center space-x-2"
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 border border-gray-200">
              {!isEditing ? (
                // View Mode
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#4F46E5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-200">
                        <label className="text-sm text-[#6B7280]">Full Name</label>
                        <p className="text-[#111827] font-medium">{user.name || '—'}</p>
                      </div>
                      <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-200">
                        <label className="text-sm text-[#6B7280]">Email Address</label>
                        <p className="text-[#111827] font-medium">{user.email || '—'}</p>
                      </div>
                      <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-200">
                        <label className="text-sm text-[#6B7280]">Phone Number</label>
                        <p className="text-[#111827] font-medium">{user.phone || '—'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Address
                    </h3>
                    <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-200">
                      {user.address ? (
                        <p className="text-[#111827]">
                          {user.address.street && <>{user.address.street}<br /></>}
                          {user.address.city && user.address.state && user.address.pincode && 
                            <>{user.address.city}, {user.address.state} - {user.address.pincode}<br /></>
                          }
                          {user.address.country || ''}
                        </p>
                      ) : (
                        <p className="text-[#6B7280]">No address added yet</p>
                      )}
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.newsletter ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-[#6B7280]">Newsletter Subscription</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.emailNotifications ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-[#6B7280]">Email Notifications</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${user.preferences?.smsNotifications ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-[#6B7280]">SMS Notifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-[#111827] mb-4">Edit Profile</h3>
                  
                  {/* Personal Information Edit */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editedUser.name || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editedUser.email || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={editedUser.phone || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  {/* Address Edit */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#111827] mb-3">Address</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <input
                          type="text"
                          name="street"
                          value={editedUser.address?.street || ''}
                          onChange={handleAddressChange}
                          placeholder="Street Address"
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="city"
                          value={editedUser.address?.city || ''}
                          onChange={handleAddressChange}
                          placeholder="City"
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="state"
                          value={editedUser.address?.state || ''}
                          onChange={handleAddressChange}
                          placeholder="State"
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="pincode"
                          value={editedUser.address?.pincode || ''}
                          onChange={handleAddressChange}
                          placeholder="Pincode"
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="country"
                          value={editedUser.address?.country || ''}
                          onChange={handleAddressChange}
                          placeholder="Country"
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#111827] placeholder-[#9CA3AF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferences Edit */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#111827] mb-3">Preferences</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={editedUser.preferences?.newsletter || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-[#4F46E5] bg-white border-gray-300 rounded focus:ring-[#4F46E5]"
                        />
                        <span className="text-[#6B7280]">Receive newsletter</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          checked={editedUser.preferences?.emailNotifications || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-[#4F46E5] bg-white border-gray-300 rounded focus:ring-[#4F46E5]"
                        />
                        <span className="text-[#6B7280]">Email notifications</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          checked={editedUser.preferences?.smsNotifications || false}
                          onChange={handlePreferenceChange}
                          className="w-4 h-4 text-[#4F46E5] bg-white border-gray-300 rounded focus:ring-[#4F46E5]"
                        />
                        <span className="text-[#6B7280]">SMS notifications</span>
                      </label>
                    </div>
                  </div>

                  {/* Save/Cancel Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <button
                      onClick={handleSaveProfile}
                      className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-6 py-2 bg-gray-200 text-[#6B7280] rounded-lg hover:bg-gray-300 transition-all duration-300"
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