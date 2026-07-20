import React from "react";
import "../../styles/taskReport.css";

const taskData = [
  {
    id: 1,
    task: "Call ABC Pvt Ltd",
    assignedTo: "Aruna",
    priority: "High",
    dueDate: "22 Jul 2026",
    status: "Pending",
  },
  {
    id: 2,
    task: "Prepare Quotation",
    assignedTo: "Admin",
    priority: "Medium",
    dueDate: "23 Jul 2026",
    status: "In Progress",
  },
  {
    id: 3,
    task: "Collect Payment",
    assignedTo: "Sales Executive",
    priority: "Low",
    dueDate: "24 Jul 2026",
    status: "Completed",
  },
];

const TaskReport = () => {
  return (
    <div className="task-report">

      <div className="task-report-header">
        <h3>Task Report</h3>
      </div>

      <table className="task-report-table">

        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {taskData.map((task) => (

            <tr key={task.id}>

              <td>{task.task}</td>

              <td>{task.assignedTo}</td>

              <td>
                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
              </td>

              <td>{task.dueDate}</td>

              <td>
                <span
                  className={`status ${task.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {task.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TaskReport;