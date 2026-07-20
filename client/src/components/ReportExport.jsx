import React from "react";
import {
  FiPrinter,
  FiDownload,
} from "react-icons/fi";

import "../styles/reportExport.css";

const ReportExport = () => {

  const exportPDF = () => {
    alert("PDF Export Coming Soon");
  };

  const exportExcel = () => {
    alert("Excel Export Coming Soon");
  };

  const exportCSV = () => {
    alert("CSV Export Coming Soon");
  };

  const printReport = () => {
    window.print();
  };

  return (

    <div className="report-export">

      <button
        className="pdf-btn"
        onClick={exportPDF}
      >
        📄 Export PDF
      </button>

      <button
        className="excel-btn"
        onClick={exportExcel}
      >
        📊 Export Excel
      </button>

      <button
        className="csv-btn"
        onClick={exportCSV}
      >
        📑 Export CSV
      </button>

      <button
        className="print-btn"
        onClick={printReport}
      >
        <FiPrinter />
        Print
      </button>

    </div>

  );

};

export default ReportExport;