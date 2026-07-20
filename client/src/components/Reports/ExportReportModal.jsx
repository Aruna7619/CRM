import React from "react";
import "../../styles/exportReportModal.css";

const ExportReportModal = ({
  isOpen,
  onClose,
}) => {

  if (!isOpen) return null;

  const handleExport = (type) => {
    alert(`${type} export will be implemented after backend integration.`);
    onClose();
  };

  return (

    <div className="export-modal-overlay">

      <div className="export-modal">

        <div className="export-modal-header">

          <h2>Export Report</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="export-options">

          <button
            className="pdf-btn"
            onClick={() => handleExport("PDF")}
          >
            Export as PDF
          </button>

          <button
            className="excel-btn"
            onClick={() => handleExport("Excel")}
          >
            Export as Excel
          </button>

          <button
            className="print-btn"
            onClick={() => window.print()}
          >
            Print Report
          </button>

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
};

export default ExportReportModal;