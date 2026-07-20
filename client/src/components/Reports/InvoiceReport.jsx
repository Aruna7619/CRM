import React from "react";
import "../../styles/invoiceReport.css";

const invoiceData = [
  {
    id: 1,
    invoiceNo: "INV001",
    client: "ABC Pvt Ltd",
    amount: 25000,
    paymentStatus: "Paid",
    dueDate: "30 Jul 2026",
  },
  {
    id: 2,
    invoiceNo: "INV002",
    client: "XYZ Solutions",
    amount: 18000,
    paymentStatus: "Unpaid",
    dueDate: "02 Aug 2026",
  },
  {
    id: 3,
    invoiceNo: "INV003",
    client: "TechSoft",
    amount: 32000,
    paymentStatus: "Partially Paid",
    dueDate: "05 Aug 2026",
  },
];

const InvoiceReport = () => {
  return (
    <div className="invoice-report">

      <div className="invoice-report-header">
        <h3>Invoice Report</h3>
      </div>

      <table className="invoice-report-table">

        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Due Date</th>
          </tr>
        </thead>

        <tbody>

          {invoiceData.map((invoice) => (

            <tr key={invoice.id}>

              <td>{invoice.invoiceNo}</td>

              <td>{invoice.client}</td>

              <td>
                ₹{invoice.amount.toLocaleString()}
              </td>

              <td>

                <span
                  className={`payment-status ${invoice.paymentStatus
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {invoice.paymentStatus}
                </span>

              </td>

              <td>{invoice.dueDate}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default InvoiceReport;