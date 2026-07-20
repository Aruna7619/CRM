import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/taskFilters.css";

const TaskFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) => {

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("");
    setPriorityFilter("");
  };

  return (
    <div className="task-filters">

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Task No or Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button
        className="reset-btn"
        onClick={handleReset}
      >
        Reset
      </button>

    </div>
  );
};

export default TaskFilters;