import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
const handleLogin = (e) => {
  e.preventDefault();

  // Check empty fields
  if (email.trim() === "" || password.trim() === "") {
    alert("Please enter Email and Password.");
    return;
  }

  // Admin Login
  if (
    email === "admin@gmail.com" &&
    password === "admin123" &&
    role === "Admin"
  ) {
    navigate("/admin-dashboard");
    return;
  }

  // Employee Login
  if (
    email === "employee@gmail.com" &&
    password === "employee123" &&
    role === "Employee"
  ) {
    navigate("/employee-dashboard");
    return;
  }

  // Manager Login
  if (
    email === "manager@gmail.com" &&
    password === "manager123" &&
    role === "Manager"
  ) {
    navigate("/manager-dashboard");
    return;
  }

  alert("Invalid Email, Password or Role");
};
  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h2>CRM LOGIN</h2>
          <p>Welcome Back! Please login to continue.</p>
        </div>

        <form onSubmit={handleLogin} autoComplete="off">

          {/* Email */}
          <div className="login-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>

          {/* Password */}
          <div className="login-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Role */}
          <div className="login-group">
            <label>Login As</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {/* Remember */}
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;