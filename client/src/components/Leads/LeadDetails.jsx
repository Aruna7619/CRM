import React from "react";
import "../../styles/leadDetails.css";

const LeadDetails = ({ isOpen, onClose, lead }) => {
  if (!isOpen || !lead) return null;

  return (
    <div className="lead-details-overlay">
      <div className="lead-details">

        <div className="lead-details-header">
          <h2>Lead Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="lead-details-body">

          <div className="detail-item">
            <strong>Full Name</strong>
            <p>{lead.name}</p>
          </div>

          <div className="detail-item">
            <strong>Company</strong>
            <p>{lead.company}</p>
          </div>

          <div className="detail-item">
            <strong>Email</strong>
            <p>{lead.email}</p>
          </div>

          <div className="detail-item">
            <strong>Phone</strong>
            <p>{lead.phone}</p>
          </div>

          <div className="detail-item">
            <strong>Lead Source</strong>
            <p>{lead.source || "N/A"}</p>
          </div>

          <div className="detail-item">
            <strong>Status</strong>
            <p>{lead.status}</p>
          </div>

          <div className="detail-item full-width">
            <strong>Notes</strong>
            <p>{lead.notes || "No notes available."}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LeadDetails;