import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/leadFilters.css";

const LeadFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  return (
    <div className="lead-filters">
      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Name or Company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Lost">Lost</option>
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

export default LeadFilters;