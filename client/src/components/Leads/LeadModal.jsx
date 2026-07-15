import React from "react";
import LeadForm from "./LeadForm";
import "../../styles/leadModal.css";

const LeadModal = ({
  isOpen,
  onClose,
  lead,
  leads,
  setLeads,
}) => {
  if (!isOpen) return null;

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal">
        <div className="lead-modal-header">
          <h2>{lead ? "Edit Lead" : "Add Lead"}</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <LeadForm
          lead={lead}
          leads={leads}
          setLeads={setLeads}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default LeadModal;