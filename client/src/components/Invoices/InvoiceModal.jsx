import React from "react";
import InvoiceForm from "./InvoiceForm";
import "../../styles/invoiceModal.css";

const InvoiceModal = ({
  isOpen,
  onClose,
  invoice,
  invoices,
  setInvoices,
}) => {
  if (!isOpen) return null;

  return (
    <div className="invoice-modal-overlay">
      <div className="invoice-modal">

        <div className="invoice-modal-header">
          <h2>
            {invoice ? "Edit Invoice" : "New Invoice"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <InvoiceForm
          invoice={invoice}
          invoices={invoices}
          setInvoices={setInvoices}
          onClose={onClose}
        />

      </div>
    </div>
  );
};

export default InvoiceModal;