import React from "react";
import "../../styles/deleteLeadModal.css";

const DeleteLeadModal = ({
  isOpen,
  onClose,
 lead,
  leads,
  setLeads,
}) => {
  if (!isOpen || !lead) return null;

  const handleDelete = () => {
    const updatedLeads = leads.filter(
      (item) => item.id !== lead.id
    );

    setLeads(updatedLeads);
    onClose();
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h2>Delete Lead</h2>

        <p>
          Are you sure you want to delete
          <strong> {lead.name}</strong>?
        </p>

        <div className="delete-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteLeadModal;