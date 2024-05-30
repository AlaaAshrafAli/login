//RoleSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';
import sideImage from '../assets/3.jpg'; 

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="container">
      <div className="side-image">
        <img src={sideImage} alt=" " />
      </div>
      <div className="content">
        <h1>Select Your Role</h1>
        <button onClick={() => handleRoleSelection('student')}>
          <i className="fas fa-user"></i> Student
        </button>
        <button onClick={() => handleRoleSelection('teacher')}>
          <i className="fas fa-chalkboard-teacher"></i> Teacher
        </button>
        <button onClick={() => handleRoleSelection('admin')}>
          <i className="fas fa-user-tie"></i> Admin
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
