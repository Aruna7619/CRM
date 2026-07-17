import React from "react";
import "../styles/addPaymentModal.css";

const ViewPaymentModal = ({ payment, closeModal }) => {

  if (!payment) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Payment Details</h2>

        <div className="view-details">

          <div className="view-group">
            <label>Client Name</label>
            <input value={payment.client} disabled />
          </div>

          <div className="view-group">
            <label>Invoice Number</label>
            <input value={payment.invoice} disabled />
          </div>

          <div className="view-group">
            <label>Amount</label>
            <input value={`₹ ${payment.amount}`} disabled />
          </div>

          <div className="view-group">
            <label>Payment Date</label>
            <input value={payment.paymentDate} disabled />
          </div>

          <div className="view-group">
            <label>Due Date</label>
            <input value={payment.dueDate} disabled />
          </div>

          <div className="view-group">
            <label>Payment Method</label>
            <input value={payment.method} disabled />
          </div>

          <div className="view-group">
            <label>Status</label>
            <input value={payment.status} disabled />
          </div>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ViewPaymentModal;