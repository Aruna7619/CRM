import React from "react";
import "../../styles/taskDetails.css";

const TaskDetails = ({
  isOpen,
  onClose,
  task,
}) => {

  if (!isOpen || !task) return null;

  return (
    <div className="task-details-overlay">

      <div className="task-details-modal">

        <div className="task-details-header">

          <h2>Task Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="task-details-content">

          <div className="detail-row">
            <span className="label">Task Number</span>
            <span>{task.taskNo}</span>
          </div>

          <div className="detail-row">
            <span className="label">Task Title</span>
            <span>{task.title}</span>
          </div>

          <div className="detail-row">
            <span className="label">Assigned To</span>
            <span>{task.assignedTo}</span>
          </div>

          <div className="detail-row">
            <span className="label">Priority</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>

          <div className="detail-row">
            <span className="label">Status</span>
            <span
              className={`status ${task.status
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {task.status}
            </span>
          </div>

          <div className="detail-row">
            <span className="label">Due Date</span>
            <span>{task.dueDate}</span>
          </div>

          <div className="detail-row">
            <span className="label">Created Date</span>
            <span>{task.createdDate}</span>
          </div>

          <div className="detail-description">

            <h4>Description</h4>

            <p>
              {task.description || "No description available."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TaskDetails;