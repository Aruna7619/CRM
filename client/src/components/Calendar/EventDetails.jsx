import React from "react";
import "../../styles/eventDetails.css";

const EventDetails = ({
  isOpen,
  onClose,
  event,
  setIsModalOpen,
  setIsDeleteOpen,
}) => {

  if (!isOpen || !event) return null;

  return (
    <div className="event-details-overlay">

      <div className="event-details-modal">

        <div className="event-details-header">

          <h2>Event Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="event-details-content">

          <div className="detail-row">
            <span className="label">Title</span>
            <span>{event.title}</span>
          </div>

          <div className="detail-row">
            <span className="label">Event Type</span>
            <span className="event-type">
              {event.type}
            </span>
          </div>

          <div className="detail-row">
            <span className="label">Start</span>
            <span>{event.start}</span>
          </div>

          <div className="detail-row">
            <span className="label">End</span>
            <span>{event.end}</span>
          </div>

          <div className="detail-row">
            <span className="label">Assigned To</span>
            <span>{event.assignedTo}</span>
          </div>

          <div className="detail-description">

            <h4>Description</h4>

            <p>
              {event.description || "No description available."}
            </p>

          </div>

          <div className="event-details-actions">

  <button
    className="edit-btn"
    onClick={() => {
      onClose();
      setIsModalOpen(true);
    }}
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={() => {
      onClose();
      setIsDeleteOpen(true);
    }}
  >
    Delete
  </button>

  <button
    className="close-btn-footer"
    onClick={onClose}
  >
    Close
  </button>

</div>

        </div>

      </div>

    </div>
  );
};

export default EventDetails;