import React from "react";
import "../../styles/recentLeads.css";

const leads = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Pvt Ltd",
    status: "New",
  },
  {
    id: 2,
    name: "Priya Singh",
    company: "XYZ Solutions",
    status: "Follow Up",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    company: "Tech World",
    status: "Qualified",
  },
];

const RecentLeads = () => {
  return (
    <div className="recent-leads">
      <h3>Recent Leads</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentLeads;