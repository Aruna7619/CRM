import React from "react";
import { FiSearch } from "react-icons/fi";
import "../../styles/invoiceFilters.css";

const InvoiceFilters = ({
  searchTerm,
  setSearchTerm,
  paymentFilter,
  setPaymentFilter,
}) => {
  const handleReset = () => {
    setSearchTerm("");
    setPaymentFilter("");
  };

  return (
    <div className="invoice-filters">

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search by Invoice No or Client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        value={paymentFilter}
        onChange={(e) => setPaymentFilter(e.target.value)}
      >
        <option value="">All Payments</option>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Partially Paid">Partially Paid</option>
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

export default InvoiceFilters;