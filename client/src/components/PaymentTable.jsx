import React from "react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import "../styles/paymentTable.css";

const PaymentTable = ({
  payments,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="payment-table-container">

      <table className="payment-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Invoice No</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {payments.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Payments Found
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment.id}>

                <td>{payment.id}</td>

                <td>{payment.client}</td>

                <td>{payment.invoice}</td>

                <td>₹ {payment.amount}</td>

                <td>
                  <span
                    className={
                      payment.status === "Paid"
                        ? "status-paid"
                        : payment.status === "Partial"
                        ? "status-partial"
                        : "status-unpaid"
                    }
                  >
                    {payment.status}
                  </span>
                </td>

                <td>{payment.dueDate}</td>

                <td className="action-column">

                  <button
                    type="button"
                    className="action-btn view-btn"
                    onClick={() => onView(payment)}
                    title="View Payment"
                  >
                    <FiEye />
                  </button>

                  <button
                    type="button"
                    className="action-btn edit-btn"
                    onClick={() => onEdit(payment)}
                    title="Edit Payment"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    type="button"
                    className="action-btn delete-btn"
                    onClick={() => onDelete(payment)}
                    title="Delete Payment"
                  >
                    🗑
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default PaymentTable;