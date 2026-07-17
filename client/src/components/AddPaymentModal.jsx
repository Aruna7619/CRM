import React, { useState, useEffect } from "react";
import "../styles/addPaymentModal.css";

const AddPaymentModal = ({
  closeModal,
  addPayment,
  updatePayment,
  editPayment,
}) => {

  const [payment, setPayment] = useState({
    client: "",
    invoice: "",
    amount: "",
    paymentDate: "",
    dueDate: "",
    method: "Cash",
    status: "Paid",
  });

  useEffect(() => {
    if (editPayment) {
      setPayment(editPayment);
    }
  }, [editPayment]);

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editPayment) {
      updatePayment(payment);
      alert("Payment Updated Successfully!");
    } else {
      addPayment(payment);
      alert("Payment Added Successfully!");
    }

    closeModal();
  };

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>
          {editPayment ? "Edit Payment" : "Add Payment"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="client"
            placeholder="Client Name"
            value={payment.client}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="invoice"
            placeholder="Invoice Number"
            value={payment.invoice}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={payment.amount}
            onChange={handleChange}
            required
          />

          <label>Payment Date</label>

          <input
            type="date"
            name="paymentDate"
            value={payment.paymentDate}
            onChange={handleChange}
            required
          />

          <label>Due Date</label>

          <input
            type="date"
            name="dueDate"
            value={payment.dueDate}
            onChange={handleChange}
            required
          />

          <select
            name="method"
            value={payment.method}
            onChange={handleChange}
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
          </select>

          <select
            name="status"
            value={payment.status}
            onChange={handleChange}
          >
            <option>Paid</option>
            <option>Partial</option>
            <option>Unpaid</option>
          </select>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editPayment ? "Update Payment" : "Save Payment"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddPaymentModal;