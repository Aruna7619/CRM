import React from "react";
import "../styles/addClientModal.css";

const ViewClientModal = ({ client, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>View Client</h2>

        <input value={client.name} disabled />
        <input value={client.company} disabled />
        <input value={client.phone} disabled />
        <input value={client.email} disabled />

        <select value={client.status} disabled>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="modal-buttons">
          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewClientModal;