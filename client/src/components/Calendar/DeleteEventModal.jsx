import React from "react";
import "../../styles/deleteEventModal.css";

const DeleteEventModal = ({
  isOpen,
  onClose,
  event,
  events,
  setEvents,
}) => {

  if (!isOpen || !event) return null;

  const handleDelete = () => {

   const updatedEvents = events.filter(
  (item) => String(item.id) !== String(event.id)
);

setEvents(updatedEvents);
onClose();

  };

  return (

    <div className="delete-event-overlay">

      <div className="delete-event-modal">

        <h2>Delete Event</h2>

        <p>
          Are you sure you want to delete
          <strong> "{event.title}"</strong>?
        </p>

        <div className="delete-actions">

          <button
            className="cancel-delete-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

};

export default DeleteEventModal;