import React, { useState } from "react";
import "../styles/reportFilters.css";

const ReportFilters = () => {

  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    reportType: "",
  });

  const handleChange = (e) => {

    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

  };

  const generateReport = () => {

    alert("Report Generated Successfully!");

  };

  return (

    <div className="report-filter-box">

      <div className="filter-group">

        <label>From Date</label>

        <input
          type="date"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleChange}
        />

      </div>

      <div className="filter-group">

        <label>To Date</label>

        <input
          type="date"
          name="toDate"
          value={filters.toDate}
          onChange={handleChange}
        />

      </div>

      <div className="filter-group">

        <label>Report Type</label>

        <select
          name="reportType"
          value={filters.reportType}
          onChange={handleChange}
        >
          <option value="">Select Report</option>
          <option>Leads</option>
          <option>Clients</option>
          <option>Quotations</option>
          <option>Invoices</option>
          <option>Payments</option>
          <option>Social Media</option>
        </select>

      </div>

      <div className="filter-btn">

        <button onClick={generateReport}>
          Generate Report
        </button>

      </div>

    </div>

  );

};

export default ReportFilters;