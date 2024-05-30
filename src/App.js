import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import Login from './components/Login';
import AdminProfile from './Profile/AdminProfile';
import StudentProfile from './Profile/StudentProfile';
import TeacherProfile from './Profile/TeacherProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/admin" element={<AdminProfile />} />
        <Route path="/profile/student" element={<StudentProfile />} />
        <Route path="/profile/teacher" element={<TeacherProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
