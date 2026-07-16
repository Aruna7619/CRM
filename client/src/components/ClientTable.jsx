import React from "react";
import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

import "../styles/clientTable.css";

const ClientTable = ({ clients, onView, onEdit, onDelete }) => {
  return (
    <div className="client-table-container">
      <table className="client-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Clients Found
              </td>
            </tr>
          ) : (
            clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.company}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>

                <td>
                  <span
                    className={
                      client.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {client.status}
                  </span>
                </td>

                <td className="action-column">

                  <button
                    type="button"
                    className="action-btn view-btn"
                    onClick={() => onView(client)}
                    title="View Client"
                  >
                    <HiOutlineEye size={20} />
                  </button>

                  <button
                    type="button"
                    className="action-btn edit-btn"
                    onClick={() => onEdit(client)}
                    title="Edit Client"
                  >
                    <HiOutlinePencilSquare size={20} />
                  </button>

                  <button
                    type="button"
                    className="action-btn delete-btn"
                    onClick={() => onDelete(client)}
                    title="Delete Client"
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

export default ClientTable;