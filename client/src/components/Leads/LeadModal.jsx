import React from "react";
import LeadForm from "./LeadForm";
import "../../styles/leadModal.css";

const LeadModal = ({ isOpen, onClose, lead }) => {
  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal">

        <div className="lead-modal-header">
          <h2>{lead ? "Edit Lead" : "Add Lead"}</h2>

          <button onClick={onClose} className="close-btn">
            ×
          </button>
        </div>

        <LeadForm
          lead={lead}
          onClose={onClose}
        />

      </div>
    </div>
  );
};

export default LeadModal;