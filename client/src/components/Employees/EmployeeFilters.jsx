import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/employeeFilters.css";

const EmployeeFilters = ({
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
}) => {

  const handleReset = () => {
    setSearchTerm("");
    setDepartmentFilter("");
  };

  return (
    <div className="employee-filters">

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      <select
        value={departmentFilter}
        onChange={(e) => setDepartmentFilter(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="IT">IT</option>
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

export default EmployeeFilters;