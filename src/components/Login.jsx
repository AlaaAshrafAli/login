import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import sideImage from '../assets/3.jpg';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role');

  const handleLogin = (event) => {
    event.preventDefault();
    if (role) {
      navigate(`/profile/${role}`);
    } else {
      console.error('Unknown role:', role);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="login-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 bg-gradient-to-r from-db5300 to-db5300 p-8 flex justify-center items-center">
            <img className="login-side-image" src={sideImage} alt="Side" />
          </div>
          <div className="w-full md:w-2/3 p-8">
            <h2 className="login-title">Login as {role}</h2>
            <form onSubmit={handleLogin} className="space-y-6 login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <button
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
