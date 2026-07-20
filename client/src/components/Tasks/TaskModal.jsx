import React from "react";
import TaskForm from "./TaskForm";
import "../../styles/taskModal.css";

const TaskModal = ({
  isOpen,
  onClose,
  task,
  tasks,
  setTasks,
}) => {

  if (!isOpen) return null;

  return (
    <div className="task-modal-overlay">

      <div className="task-modal">

        <div className="task-modal-header">

          <h2>
            {task ? "Edit Task" : "New Task"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <TaskForm
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          onClose={onClose}
        />

      </div>

    </div>
  );
};

export default TaskModal;