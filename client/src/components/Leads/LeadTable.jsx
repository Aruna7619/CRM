import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import "../../styles/leadTable.css";

const LeadTable = ({
  leads,
  setSelectedLead,
  setIsModalOpen,
  setIsDeleteOpen,
  setIsDetailsOpen,
}) => {
  const handleView = (lead) => {
    setSelectedLead(lead);
    setIsDetailsOpen(true);
  };

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const handleDelete = (lead) => {
    setSelectedLead(lead);
    setIsDeleteOpen(true);
  };

  if (leads.length === 0) {
    return (
      <div className="lead-table-container">
        <p className="no-data">No leads found.</p>
      </div>
    );
  }

  return (
    <div className="lead-table-container">
      <table className="lead-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.phone}</td>
              <td>{lead.email}</td>

              <td>
                <span
                  className={`status ${lead.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {lead.status}
                </span>
              </td>

              <td className="actions">
                <button
                  className="view-btn"
                  onClick={() => handleView(lead)}
                >
                  <FiEye />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(lead)}
                >
                  <FiEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(lead)}
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;