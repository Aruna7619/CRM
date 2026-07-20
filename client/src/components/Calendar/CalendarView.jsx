import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../styles/calendarView.css";

const CalendarView = ({
  events,
  setEvents,
  setSelectedEvent,
  setIsModalOpen,
  setIsDetailsOpen,
}) => {

  // Click on an empty date
  const handleDateClick = (info) => {
    setSelectedEvent({
      start: info.dateStr,
      end: info.dateStr,
    });

    setIsModalOpen(true);
  };

  // Click on an existing event
  const handleEventClick = (info) => {
    setSelectedEvent({
  id: info.event.id,
  title: info.event.title,
  type: info.event.extendedProps.type,
  start: info.event.startStr,
  end: info.event.endStr,
  assignedTo: info.event.extendedProps.assignedTo,
  description: info.event.extendedProps.description,
  backgroundColor: info.event.backgroundColor,
  borderColor: info.event.borderColor,
});

    setIsDetailsOpen(true);
  };

  // Drag & Drop event
  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) =>
      String(event.id) === info.event.id
        ? {
            ...event,
            start: info.event.startStr,
            end: info.event.endStr || info.event.startStr,
          }
        : event
    );

    setEvents(updatedEvents);
  };

  return (
    <div className="calendar-container">

      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}

        initialView="dayGridMonth"

        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}

        height="auto"

        editable={true}

        selectable={true}

        events={events}

        dateClick={handleDateClick}

        eventClick={handleEventClick}

        eventDrop={handleEventDrop}

      />

    </div>
  );
};

export default CalendarView;