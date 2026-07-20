import React from "react";
import AdminLayout from "../components/AdminLayout";
import "../styles/reports.css";
import ReportCards from "../components/ReportCards";
import ReportFilters from "../components/ReportFilters";
import ReportTable from "../components/ReportTable";
import ReportExport from "../components/ReportExport";

const Reports = () => {
  return (
    <AdminLayout>

      <div className="reports-page">

        <div className="reports-header">

          <h2>Reports</h2>

        </div>

         <ReportCards />


        <ReportFilters />

        <ReportExport />

        <ReportTable />

        

      </div>

    </AdminLayout>
  );
};

export default Reports;