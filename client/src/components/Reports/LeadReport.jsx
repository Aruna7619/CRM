import React from "react";
import "../../styles/leadReport.css";

const leadData = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Pvt Ltd",
    assignedTo: "Aruna",
    status: "Converted",
    created: "20 Jul 2026",
  },
  {
    id: 2,
    name: "Priya Reddy",
    company: "XYZ Solutions",
    assignedTo: "Admin",
    status: "Pending",
    created: "18 Jul 2026",
  },
  {
    id: 3,
    name: "Kiran Kumar",
    company: "TechSoft",
    assignedTo: "Sales Executive",
    status: "Lost",
    created: "16 Jul 2026",
  },
];

const LeadReport = () => {
  return (
    <div className="lead-report">

      <div className="lead-report-header">
        <h3>Lead Report</h3>
      </div>

      <table className="lead-report-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Lead Name</th>
            <th>Company</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Created Date</th>
          </tr>

        </thead>

        <tbody>

          {leadData.map((lead) => (

            <tr key={lead.id}>

              <td>{lead.id}</td>

              <td>{lead.name}</td>

              <td>{lead.company}</td>

              <td>{lead.assignedTo}</td>

              <td>
                <span
                  className={`lead-status ${lead.status
                    .toLowerCase()}`}
                >
                  {lead.status}
                </span>
              </td>

              <td>{lead.created}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default LeadReport;