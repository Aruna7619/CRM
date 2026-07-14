import React from "react";
import "../../styles/recentInvoices.css";

const invoices = [
  {
    id: "INV001",
    client: "ABC Pvt Ltd",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    id: "INV002",
    client: "XYZ Solutions",
    amount: "₹8,900",
    status: "Pending",
  },
  {
    id: "INV003",
    client: "Tech World",
    amount: "₹15,700",
    status: "Overdue",
  },
];

const RecentInvoices = () => {
  return (
    <div className="recent-invoices">
      <h3>Recent Invoices</h3>

      <table>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.client}</td>
              <td>{invoice.amount}</td>
              <td>
                <span
                  className={`status ${invoice.status.toLowerCase()}`}
                >
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentInvoices;