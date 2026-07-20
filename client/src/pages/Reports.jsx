import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import ReportCards from "../components/Reports/ReportCards";
import ReportFilters from "../components/Reports/ReportFilters";
import SalesReport from "../components/Reports/SalesReport";
import LeadReport from "../components/Reports/LeadReport";
import InvoiceReport from "../components/Reports/InvoiceReport";
import TaskReport from "../components/Reports/TaskReport";
import ExportReportModal from "../components/Reports/ExportReportModal";
import "../styles/reports.css";

const Reports = () => {

  const [isExportOpen, setIsExportOpen] = useState(false);

  const reportData = {
    totalLeads: 248,
    totalQuotations: 185,
    totalInvoices: 152,
    totalRevenue: 2450000,
    pendingTasks: 18,
  };

  return (
    <AdminLayout>

      <div className="reports-page">

        <div className="reports-header">

          <h2>Reports</h2>

          <button
            className="export-btn"
            onClick={() => setIsExportOpen(true)}
          >
            Export Report
          </button>

        </div>

        <ReportFilters />

        <ReportCards reportData={reportData} />

        <SalesReport />

        <LeadReport />

        <InvoiceReport />

        <TaskReport />

        <ExportReportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
        />

      </div>

    </AdminLayout>
  );
};

export default Reports;