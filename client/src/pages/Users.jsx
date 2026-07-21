import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";

import UserCards from "../components/UserCards";
import UserTable from "../components/UserTable";
import AddUserModal from "../components/AddUserModal";

import "../styles/users.css";

const Users = () => {

  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Aruna",
      email: "aruna@gmail.com",
      phone: "9876543210",
      role: "Admin",
      password: "123456",
      status: "Active",
    },
    {
      id: 2,
      name: "Madhu",
      email: "madhu@gmail.com",
      phone: "9876543211",
      role: "Employee",
      password: "123456",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543212",
      role: "Employee",
      password: "123456",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543213",
      role: "Admin",
      password: "123456",
      status: "Active",
    },
  ]);

  const addUser = (newUser) => {

    setUsers([
      ...users,
      {
        id: users.length + 1,
        ...newUser,
      },
    ]);

  };

  return (

    <AdminLayout>

      <div className="users-page">

        <div className="users-header">

          <h2>User Management</h2>

          <button
            className="add-user-btn"
            onClick={() => setShowModal(true)}
          >
            + Add User
          </button>

        </div>

        <UserCards />

        <UserTable users={users} />

      </div>

      {showModal && (

        <AddUserModal
          closeModal={() => setShowModal(false)}
          addUser={addUser}
        />

      )}

    </AdminLayout>

  );

};

export default Users;