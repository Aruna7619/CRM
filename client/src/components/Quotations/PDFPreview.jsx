import React from "react";
import "../../styles/pdfPreview.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PDFPreview = ({
  isOpen,
  onClose,
  quotation,
}) => {
  if (!isOpen || !quotation) return null;

  const downloadPDF = () => {
  console.log("Quotation data:", quotation);

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Quotation", 14, 20);

  doc.setFontSize(11);

  doc.text(`Quotation No : ${quotation.quoteNo}`, 14, 35);
  doc.text(`Date : ${quotation.date}`, 14, 42);

  doc.text(`Client : ${quotation.client}`, 14, 52);
  doc.text(`Phone : ${quotation.phone}`, 14, 59);
  doc.text(`Email : ${quotation.email}`, 14, 66);

  autoTable(doc, {
    startY: 75,

    head: [["Product", "Qty", "Price", "GST", "Total"]],

   body: (quotation.products || []).map((item) => [
  item.name,
  item.qty,
  `₹${item.price}`,
  `${item.gst}%`,
  `₹${(
    item.qty * item.price +
    (item.qty * item.price * item.gst) / 100
  ).toFixed(2)}`,
]),
  });

  doc.text(
    `Grand Total : ₹${quotation.amount.toFixed(2)}`,
    14,
    doc.lastAutoTable.finalY + 15
  );

  doc.save(`${quotation.quoteNo}.pdf`);
};

  return (
    <div className="pdf-overlay">
      <div className="pdf-container">

        <div className="pdf-header">
          <h1>Your Company Name</h1>
          <p>123 Business Street</p>
          <p>Bangalore, Karnataka</p>
          <p>Phone : +91 9876543210</p>
        </div>

        <hr />

        <div className="pdf-info">

          <div>
            <h3>Quotation</h3>

            <p>
              <strong>Quotation No :</strong>{" "}
              {quotation.quoteNo}
            </p>

            <p>
              <strong>Date :</strong>{" "}
              {quotation.date}
            </p>

            <p>
              <strong>Status :</strong>{" "}
              {quotation.status}
            </p>
          </div>

          <div>
            <h3>Client Details</h3>

            <p>{quotation.client}</p>
            <p>{quotation.phone}</p>
            <p>{quotation.email}</p>
          </div>

        </div>

        <table className="pdf-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>GST</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {quotation.products?.map((item) => {
              const total =
                item.qty * item.price +
                (item.qty *
                  item.price *
                  item.gst) /
                  100;

              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>{item.gst}%</td>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pdf-total">
          <h2>
            Grand Total : ₹
            {Number(quotation.amount).toFixed(2)}
          </h2>
        </div>

        <div className="pdf-notes">
          <h4>Notes</h4>

          <p>
            {quotation.notes || "No notes available."}
          </p>
        </div>

        <div className="pdf-buttons">

        <button
    className="download-btn"
    onClick={downloadPDF}
>
    Download PDF
</button>

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

export default PDFPreview;