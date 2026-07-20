import React from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import "../../styles/taskTable.css";

const TaskTable = ({
  tasks,
  setSelectedTask,
  setIsModalOpen,
  setIsDetailsOpen,
  setIsDeleteOpen,
}) => {

  const handleView = (task) => {
    setSelectedTask(task);
    setIsDetailsOpen(true);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = (task) => {
    setSelectedTask(task);
    setIsDeleteOpen(true);
  };

  if (tasks.length === 0) {
    return (
      <div className="task-table-container">
        <p className="no-data">No tasks found.</p>
      </div>
    );
  }

  return (
    <div className="task-table-container">

      <table className="task-table">

        <thead>
          <tr>
            <th>Task No</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Due Date</th>
            <th width="170">Actions</th>
          </tr>
        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr key={task.id}>

              <td>{task.taskNo}</td>

              <td>{task.title}</td>

              <td>{task.assignedTo}</td>

              <td>
                <span
                  className={`priority-badge ${task.priority
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {task.priority}
                </span>
              </td>

              <td>
                <span
                  className={`status-badge ${task.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {task.status}
                </span>
              </td>

              <td>{task.dueDate}</td>

              <td className="actions">

                <button
                  className="view-btn"
                  onClick={() => handleView(task)}
                >
                  <FiEye />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(task)}
                >
                  <FiEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task)}
                >
                  <FiTrash2 />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TaskTable;