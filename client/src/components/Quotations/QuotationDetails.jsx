import React from "react";
import "../../styles/quotationDetails.css";

const QuotationDetails = ({
  isOpen,
  onClose,
  quotation,
}) => {
  if (!isOpen || !quotation) return null;

  return (
    <div className="quotation-details-overlay">
      <div className="quotation-details">

        <div className="quotation-details-header">
          <h2>Quotation Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="quotation-details-body">

          <div className="detail-row">
            <span>Quotation No</span>
            <strong>{quotation.quoteNo}</strong>
          </div>

          <div className="detail-row">
            <span>Date</span>
            <strong>{quotation.date}</strong>
          </div>

          <div className="detail-row">
            <span>Client</span>
            <strong>{quotation.client}</strong>
          </div>

          <div className="detail-row">
            <span>Phone</span>
            <strong>{quotation.phone}</strong>
          </div>

          <div className="detail-row">
            <span>Email</span>
            <strong>{quotation.email}</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <strong>{quotation.status}</strong>
          </div>

          <hr />

          <h3>Products</h3>

          <table className="details-product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>GST</th>
              </tr>
            </thead>

            <tbody>
              {quotation.products?.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>{item.gst}%</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />

          <div className="detail-row total">
            <span>Grand Total</span>
            <strong>
              ₹{Number(quotation.amount).toFixed(2)}
            </strong>
          </div>

          <div className="notes">
            <h4>Notes</h4>

            <p>
              {quotation.notes || "No notes available."}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuotationDetails;