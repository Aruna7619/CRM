import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import "../../styles/upcomingTasks.css";

const tasks = [
  {
    id: 1,
    task: "Follow up with Rahul Sharma",
    due: "10:00 AM",
  },
  {
    id: 2,
    task: "Send quotation to ABC Pvt Ltd",
    due: "12:30 PM",
  },
  {
    id: 3,
    task: "Meeting with XYZ Solutions",
    due: "3:00 PM",
  },
  {
    id: 4,
    task: "Review pending invoices",
    due: "5:00 PM",
  },
];

const UpcomingTasks = () => {
  return (
    <div className="upcoming-tasks">
      <h3>Upcoming Tasks</h3>

      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <FiCheckCircle className="task-icon" />

          <div>
            <p>{task.task}</p>
            <span>{task.due}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingTasks;