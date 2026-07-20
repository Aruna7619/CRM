import React, { useState, useEffect } from "react";
import "../../styles/taskForm.css";

const TaskForm = ({
  task,
  tasks,
  setTasks,
  onClose,
}) => {

  const initialForm = {
    taskNo: "",
    title: "",
    description: "",
    assignedTo: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
    createdDate: "",
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {

    if (task) {

      setFormData(task);

    } else {

      const nextNumber = tasks.length + 1;

      setFormData({
        ...initialForm,
        taskNo: `TASK${String(nextNumber).padStart(3, "0")}`,
        createdDate: new Date().toISOString().split("T")[0],
      });

    }

  }, [task, tasks]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (task) {

      setTasks(
        tasks.map((item) =>
          item.id === task.id
            ? { ...formData, id: task.id }
            : item
        )
      );

    } else {

      setTasks([
        ...tasks,
        {
          ...formData,
          id: Date.now(),
        },
      ]);

    }

    onClose();

  };

  return (

    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <div className="task-form-grid">

        <div>
          <label>Task Number</label>
          <input
            type="text"
            name="taskNo"
            value={formData.taskNo}
            readOnly
          />
        </div>

        <div>
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="full-width">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Assigned To</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Created Date</label>
          <input
            type="date"
            name="createdDate"
            value={formData.createdDate}
            readOnly
          />
        </div>

      </div>

      <div className="task-form-actions">

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
          {task ? "Update Task" : "Save Task"}
        </button>

      </div>

    </form>

  );

};

export default TaskForm;