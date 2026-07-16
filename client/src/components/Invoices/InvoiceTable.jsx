import React from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiDownload,
  FiDollarSign,
} from "react-icons/fi";
import "../../styles/invoiceTable.css";

const InvoiceTable = ({
  invoices,
  setSelectedInvoice,
  setIsModalOpen,
  setIsDetailsOpen,
  setIsDeleteOpen,
  setIsPDFOpen,
  setIsPaymentOpen,
}) => {

  const handleView = (invoice) => {
    setSelectedInvoice(invoice);
    setIsDetailsOpen(true);
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true);
  };

  const handleDelete = (invoice) => {
    setSelectedInvoice(invoice);
    setIsDeleteOpen(true);
  };

  const handlePDF = (invoice) => {
    setSelectedInvoice(invoice);
    setIsPDFOpen(true);
  };

  const handlePayment = (invoice) => {
    setSelectedInvoice(invoice);
    setIsPaymentOpen(true);
  };

  if (invoices.length === 0) {
    return (
      <div className="invoice-table-container">
        <p className="no-data">No invoices found.</p>
      </div>
    );
  }

  return (
    <div className="invoice-table-container">
      <table className="invoice-table">

        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th width="230">Actions</th>
          </tr>
        </thead>

        <tbody>

          {invoices.map((invoice) => (

            <tr key={invoice.id}>

              <td>{invoice.invoiceNo}</td>

              <td>{invoice.client}</td>

              <td>{invoice.date}</td>

              <td>{invoice.dueDate}</td>

              <td>₹{Number(invoice.amount).toLocaleString()}</td>

              <td>
                <span
                  className={`payment-status ${invoice.paymentStatus
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {invoice.paymentStatus}
                </span>
              </td>

              <td>
                <span
                  className={`invoice-status ${invoice.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {invoice.status}
                </span>
              </td>

              <td className="actions">

                <button
                  className="view-btn"
                  onClick={() => handleView(invoice)}
                >
                  <FiEye />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(invoice)}
                >
                  <FiEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(invoice)}
                >
                  <FiTrash2 />
                </button>

                <button
                  className="pdf-btn"
                  onClick={() => handlePDF(invoice)}
                >
                  <FiDownload />
                </button>

                <button
                  className="payment-btn"
                  onClick={() => handlePayment(invoice)}
                >
                  <FiDollarSign />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
};

export default InvoiceTable;