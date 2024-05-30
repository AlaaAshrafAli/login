import React from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  return (
    <div className="profile-container">
      <h1>Admin Profile</h1>
      <p>Welcome, Admin! Here you can manage the system settings and user accounts.</p>
      <div className="admin-actions">
        <button className="admin-button">Manage System Settings</button>
        <button className="admin-button">Manage User Accounts</button>
        {/* Add more admin-specific actions here */}
      </div>
    </div>
  );
};

export default AdminProfile;
