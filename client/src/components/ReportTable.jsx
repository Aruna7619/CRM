import React from "react";
import { FiEye } from "react-icons/fi";
import "../styles/reportTable.css";

const ReportTable = () => {

  const reports = [
    {
      id: 1,
      date: "20 Jul 2026",
      module: "Leads",
      name: "Rahul Sharma",
      status: "Converted",
      amount: "-",
    },
    {
      id: 2,
      date: "21 Jul 2026",
      module: "Invoice",
      name: "ABC Pvt Ltd",
      status: "Paid",
      amount: "₹25,000",
    },
    {
      id: 3,
      date: "22 Jul 2026",
      module: "Payments",
      name: "Ramesh",
      status: "Pending",
      amount: "₹15,000",
    },
    {
      id: 4,
      date: "23 Jul 2026",
      module: "Social Media",
      name: "Home Loan Post",
      status: "Published",
      amount: "-",
    },
  ];

  return (

    <div className="report-table-container">

      <table className="report-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Module</th>
            <th>Name</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {reports.map((report) => (

            <tr key={report.id}>

              <td>{report.id}</td>

              <td>{report.date}</td>

              <td>{report.module}</td>

              <td>{report.name}</td>

              <td>

                <span
                  className={
                    report.status === "Paid" ||
                    report.status === "Converted" ||
                    report.status === "Published"
                      ? "report-success"
                      : "report-pending"
                  }
                >
                  {report.status}
                </span>

              </td>

              <td>{report.amount}</td>

              <td>

                <button
                  className="view-report-btn"
                  title="View Report"
                >
                  <FiEye />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default ReportTable;