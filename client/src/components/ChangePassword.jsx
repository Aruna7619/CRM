import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/changePassword.css";

const ChangePassword = () => {

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password.newPassword !== password.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Password Updated Successfully!");

    setPassword({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  };

  return (

    <div className="settings-card">

      <h3>Change Password</h3>

      <form onSubmit={handleSubmit}>

        <div className="password-field">

          <input
            type={show.current ? "text" : "password"}
            name="currentPassword"
            placeholder="Current Password"
            value={password.currentPassword}
            onChange={handleChange}
            required
          />

          <span
            onClick={() =>
              setShow({
                ...show,
                current: !show.current,
              })
            }
          >
            {show.current ? <FiEyeOff /> : <FiEye />}
          </span>

        </div>

        <div className="password-field">

          <input
            type={show.new ? "text" : "password"}
            name="newPassword"
            placeholder="New Password"
            value={password.newPassword}
            onChange={handleChange}
            required
          />

          <span
            onClick={() =>
              setShow({
                ...show,
                new: !show.new,
              })
            }
          >
            {show.new ? <FiEyeOff /> : <FiEye />}
          </span>

        </div>

        <div className="password-field">

          <input
            type={show.confirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={password.confirmPassword}
            onChange={handleChange}
            required
          />

          <span
            onClick={() =>
              setShow({
                ...show,
                confirm: !show.confirm,
              })
            }
          >
            {show.confirm ? <FiEyeOff /> : <FiEye />}
          </span>

        </div>

        <p className="password-note">
          Password should contain at least 8 characters.
        </p>

        <div className="settings-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={() =>
              setPassword({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
              })
            }
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-company-btn"
          >
            Update Password
          </button>

        </div>

      </form>

    </div>

  );

};

export default ChangePassword;