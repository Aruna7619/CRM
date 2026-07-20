import React from "react";
import EventForm from "./EventForm";
import "../../styles/eventModal.css";

const EventModal = ({
  isOpen,
  onClose,
  event,
  events,
  setEvents,
}) => {

  if (!isOpen) return null;

  return (
    <div className="event-modal-overlay">

      <div className="event-modal">

        <div className="event-modal-header">

          <h2>
            {event && event.id ? "Edit Event" : "New Event"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <EventForm
          event={event}
          events={events}
          setEvents={setEvents}
          onClose={onClose}
        />

      </div>

    </div>
  );
};

export default EventModal;