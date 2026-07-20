import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/reportFilters.css";

const ReportFilters = () => {
  return (
    <div className="report-filters">

      <div className="search-box">

        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Reports..."
        />

      </div>

      <input
        type="date"
      />

      <select>
        <option>All Reports</option>
        <option>Sales Report</option>
        <option>Lead Report</option>
        <option>Invoice Report</option>
        <option>Task Report</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Pending</option>
        <option>Completed</option>
        <option>Paid</option>
        <option>Unpaid</option>
      </select>

      <button className="reset-btn">
        Reset
      </button>

    </div>
  );
};

export default ReportFilters;