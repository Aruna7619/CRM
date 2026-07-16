import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/quotationFilters.css";

const QuotationFilters = ({
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
    <div className="quotation-filters">

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Quote No or Client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Draft">Draft</option>
        <option value="Sent">Sent</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
        <option value="Converted">Converted</option>
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

export default QuotationFilters;