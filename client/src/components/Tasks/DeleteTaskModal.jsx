import React from "react";
import "../../styles/deleteTaskModal.css";

const DeleteTaskModal = ({
  isOpen,
  onClose,
  task,
  tasks,
  setTasks,
}) => {

  if (!isOpen || !task) return null;

  const handleDelete = () => {

    const updatedTasks = tasks.filter(
      (item) => item.id !== task.id
    );

    setTasks(updatedTasks);

    onClose();

  };

  return (

    <div className="delete-task-overlay">

      <div className="delete-task-modal">

        <h2>Delete Task</h2>

        <p>
          Are you sure you want to delete
          <strong> {task.taskNo}</strong>?
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

export default DeleteTaskModal;