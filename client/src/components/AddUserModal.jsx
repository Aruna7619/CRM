import React, { useState } from "react";
import "../styles/addUserModal.css";

const AddUserModal = ({
  closeModal,
  addUser,
}) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Employee",
    password: "",
    status: "Active",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addUser(user);

    alert("User Added Successfully!");

    closeModal();

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Add User</h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          {/* Hidden fields to stop browser autofill */}
          <input
            type="text"
            name="fakeuser"
            autoComplete="username"
            style={{ display: "none" }}
          />

          <input
            type="password"
            name="fakepassword"
            autoComplete="current-password"
            style={{ display: "none" }}
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            autoComplete="new-email"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <select
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            <option>Admin</option>
            <option>Employee</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <select
            name="status"
            value={user.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save User
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default AddUserModal;