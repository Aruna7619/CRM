import React, { useState, useEffect } from "react";
import "../../styles/eventForm.css";

const EventForm = ({
  event,
  events,
  setEvents,
  onClose,
}) => {

  const initialForm = {
    title: "",
    type: "Meeting",
    start: "",
    end: "",
    assignedTo: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {

    if (event) {

      setFormData({
        title: event.title || "",
        type: event.type || "Meeting",
        start: event.start
          ? String(event.start).slice(0, 16)
          : "",
        end: event.end
          ? String(event.end).slice(0, 16)
          : "",
        assignedTo: event.assignedTo || "",
        description: event.description || "",
      });

    } else {

      setFormData(initialForm);

    }

  }, [event]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const getEventColor = (type) => {

    switch (type) {

      case "Meeting":
        return "#2563eb";

      case "Follow-up":
        return "#f59e0b";

      case "Task":
        return "#16a34a";

      case "Payment Reminder":
        return "#dc2626";

      case "Holiday":
        return "#7c3aed";

      default:
        return "#2563eb";
    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const color = getEventColor(formData.type);

    const eventData = {
      ...formData,
      backgroundColor: color,
      borderColor: color,
    };

    if (event && event.id) {

      setEvents(
        events.map((item) =>
          item.id === event.id
            ? {
                ...eventData,
                id: event.id,
              }
            : item
        )
      );

    } else {

      setEvents([
        ...events,
        {
          ...eventData,
          id: Date.now(),
        },
      ]);

    }

    onClose();

  };

  return (

    <form
      className="event-form"
      onSubmit={handleSubmit}
    >

      <div className="event-form-grid">

        <div>

          <label>Event Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Event Type</label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option>Meeting</option>
            <option>Follow-up</option>
            <option>Task</option>
            <option>Payment Reminder</option>
            <option>Holiday</option>
          </select>

        </div>

        <div>

          <label>Start</label>

          <input
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>End</label>

          <input
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleChange}
            required
          />

        </div>

        <div>

          <label>Assigned To</label>

          <select
  name="assignedTo"
  value={formData.assignedTo}
  onChange={handleChange}
>
  <option value="">Select Employee</option>
  <option>Admin</option>
  <option>Aruna</option>
  <option>Sales Executive</option>
  <option>Manager</option>
</select>

        </div>

        <div className="full-width">

          <label>Description</label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="event-form-actions">

        <button
          type="button"
          className="cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          {event && event.id
            ? "Update Event"
            : "Save Event"}
        </button>

      </div>

    </form>

  );

};

export default EventForm;