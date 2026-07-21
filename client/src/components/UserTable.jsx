import React from "react";
import {
  FiEye,
  FiEdit2,
} from "react-icons/fi";

import "../styles/userTable.css";

const UserTable = ({ users }) => {

  return (

    <div className="user-table-container">

      <table className="user-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {users.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                style={{ textAlign: "center" }}
              >
                No Users Found
              </td>

            </tr>

          ) : (

            users.map((user) => (

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>

                  <span
                    className={
                      user.role === "Admin"
                        ? "role-admin"
                        : "role-employee"
                    }
                  >
                    {user.role}
                  </span>

                </td>

                <td>

                  <span
                    className={
                      user.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {user.status}
                  </span>

                </td>

                <td className="action-column">

                  <button
                    className="action-btn view-btn"
                    title="View"
                  >
                    <FiEye />
                  </button>

                  <button
                    className="action-btn edit-btn"
                    title="Edit"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    className="action-btn delete-btn"
                    title="Delete"
                  >
                    🗑
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

};

export default UserTable;