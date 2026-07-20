import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import CalendarView from "../components/Calendar/CalendarView";
import EventModal from "../components/Calendar/EventModal";
import EventDetails from "../components/Calendar/EventDetails";
import DeleteEventModal from "../components/Calendar/DeleteEventModal";
import "../styles/calendar.css";

const initialEvents = [
  {
    id: 1,
    title: "Client Meeting",
    type: "Meeting",
    start: "2026-07-25T10:00",
    end: "2026-07-25T11:00",
    assignedTo: "Aruna",
    description: "CRM Demo for ABC Pvt Ltd",
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  {
    id: 2,
    title: "Quotation Follow-up",
    type: "Follow-up",
    start: "2026-07-27T15:00",
    end: "2026-07-27T15:30",
    assignedTo: "Admin",
    description: "Call XYZ Solutions",
    backgroundColor: "#f59e0b",
    borderColor: "#f59e0b",
  },
];

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="calendar-page">

        <div className="calendar-header">
          <h2>Calendar</h2>

          <button
            className="add-event-btn"
            onClick={() => {
              setSelectedEvent(null);
              setIsModalOpen(true);
            }}
          >
            + New Event
          </button>
        </div>

        <CalendarView
  events={events}
  setEvents={setEvents}
  setSelectedEvent={setSelectedEvent}
  setIsModalOpen={setIsModalOpen}
  setIsDetailsOpen={setIsDetailsOpen}
  setIsDeleteOpen={setIsDeleteOpen}
/>

        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={selectedEvent}
          events={events}
          setEvents={setEvents}
        />

        <EventDetails
  isOpen={isDetailsOpen}
  onClose={() => setIsDetailsOpen(false)}
  event={selectedEvent}
  setIsModalOpen={setIsModalOpen}
  setIsDeleteOpen={setIsDeleteOpen}
/>

        <DeleteEventModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          event={selectedEvent}
          events={events}
          setEvents={setEvents}
        />

      </div>
    </AdminLayout>
  );
};

export default Calendar;