import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter Email and Password");
    return;
  }

  try {
    const response = await api.post("/auth/login", {
    email,
    password
});

    const result = response.data;

    // Save token
    localStorage.setItem("token", result.token);

    // Save user
    localStorage.setItem("user", JSON.stringify(result.data));

    alert(result.message);

    // Redirect based on role
    if (result.data.role_name === "Admin") {
      navigate("/dashboard");
    } else if (result.data.role_name === "Manager") {
      navigate("/manager-dashboard");
    } else {
      navigate("/employee-dashboard");
    }
  } catch (error) {
    alert(
      error.response?.data?.message || "Invalid Email or Password"
    );
  }
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






