import React from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiDownload,
  FiRefreshCw,
} from "react-icons/fi";
import "../../styles/quotationTable.css";

const QuotationTable = ({
  quotations,
  setSelectedQuotation,
  setIsModalOpen,
  setIsDetailsOpen,
  setIsDeleteOpen,
  setIsPDFOpen,
  setIsConvertOpen,
}) => {
  const handleView = (quotation) => {
    setSelectedQuotation(quotation);
    setIsDetailsOpen(true);
  };

  const handleEdit = (quotation) => {
    setSelectedQuotation(quotation);
    setIsModalOpen(true);
  };

  const handleDelete = (quotation) => {
    setSelectedQuotation(quotation);
    setIsDeleteOpen(true);
  };

  const handlePDF = (quotation) => {
    setSelectedQuotation(quotation);
    setIsPDFOpen(true);
  };

  const handleConvert = (quotation) => {
    setSelectedQuotation(quotation);
    setIsConvertOpen(true);
  };

  if (quotations.length === 0) {
    return (
      <div className="quotation-table-container">
        <p className="no-data">No quotations found.</p>
      </div>
    );
  }

  return (
    <div className="quotation-table-container">
      <table className="quotation-table">
        <thead>
          <tr>
            <th>Quote No</th>
            <th>Client</th>
            <th>Date</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Status</th>
            <th width="240">Actions</th>
          </tr>
        </thead>

        <tbody>
          {quotations.map((quotation) => (
            <tr key={quotation.id}>
              <td>{quotation.quoteNo}</td>
              <td>{quotation.client}</td>
              <td>{quotation.date}</td>
              <td>{quotation.phone}</td>
              <td>₹{quotation.amount.toLocaleString()}</td>

              <td>
                <span
                  className={`status ${quotation.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {quotation.status}
                </span>
              </td>

              <td className="actions">
                <button
                  className="view-btn"
                  onClick={() => handleView(quotation)}
                >
                  <FiEye />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(quotation)}
                >
                  <FiEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(quotation)}
                >
                  <FiTrash2 />
                </button>

                <button
                  className="pdf-btn"
                  onClick={() => handlePDF(quotation)}
                >
                  <FiDownload />
                </button>

                <button
                  className="convert-btn"
                  onClick={() => handleConvert(quotation)}
                >
                  <FiRefreshCw />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationTable;