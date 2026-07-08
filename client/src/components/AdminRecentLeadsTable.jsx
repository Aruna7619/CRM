import React from "react";
import "../styles/adminRecentLeadsTable.css";

const AdminRecentLeadsTable = () => {
  const leads = [
    {
      id: "L001",
      customer: "Rahul Sharma",
      agent: "Priya",
      loanType: "Home Loan",
      amount: "₹25L",
      status: "Sanctioned",
      date: "18 Jun 2026"
    },
    {
      id: "L002",
      customer: "Anita Desai",
      agent: "Rajesh",
      loanType: "Personal Loan",
      amount: "₹5L",
      status: "Under Review",
      date: "18 Jun 2026"
    },
    {
      id: "L003",
      customer: "Vikram Mehta",
      agent: "Aman",
      loanType: "Car Loan",
      amount: "₹8L",
      status: "Disbursed",
      date: "18 Jun 2026"
    },
    {
      id: "L004",
      customer: "Neha Kapoor",
      agent: "Priya",
      loanType: "Home Loan",
      amount: "₹12L",
      status: "Approved",
      date: "17 Jun 2026"
    },
    {
      id: "L005",
      customer: "Suresh Yadav",
      agent: "Rajesh",
      loanType: "Business Loan",
      amount: "₹15L",
      status: "Pending",
      date: "17 Jun 2026"
    }
  ];

  const getStatusClass = (status) => {
    if (status === "Approved") return "approved";
    if (status === "Pending") return "pending";
    if (status === "Under Review") return "review";
    if (status === "Sanctioned") return "sanctioned";
    if (status === "Disbursed") return "disbursed";
    return "rejected";
  };

  return (
    <div className="table-container">
      <div className="table-title">Recent Lead Applications</div>

      <table className="leads-table">
        <thead>
          <tr>
            <th>Lead ID</th>
            <th>Customer</th>
            <th>Agent</th>
            <th>Loan Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.customer}</td>
              <td>{lead.agent}</td>
              <td>{lead.loanType}</td>
              <td>{lead.amount}</td>
              <td>
                <span className={`status-admin ${getStatusClass(lead.status)}`}>
                  {lead.status}
                </span>
              </td>
              <td>{lead.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRecentLeadsTable;