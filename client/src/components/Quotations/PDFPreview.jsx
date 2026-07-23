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

  const doc = new jsPDF();

  // Colors
  const primary = [41, 128, 185];
  const gray = [100, 100, 100];

  // ===============================
  // Company Header
  // ===============================

  doc.setFillColor(...primary);
  doc.rect(0, 0, 210, 32, "F");

  doc.setTextColor(255);

  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("YOUR COMPANY NAME", 105, 15, {
    align: "center",
  });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  doc.text(
    "123 Business Street, Bangalore | +91 9876543210",
    105,
    22,
    { align: "center" }
  );

  doc.text(
    "info@company.com | GSTIN : 29ABCDE1234F1Z5",
    105,
    28,
    { align: "center" }
  );

  // ===============================
  // Title
  // ===============================

  doc.setTextColor(0);

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("QUOTATION", 105, 45, {
    align: "center",
  });

  // ===============================
  // Quotation Details
  // ===============================

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  doc.text(`Quotation No : ${quotation.quoteNo}`, 15, 60);

  doc.text(`Date : ${quotation.date}`, 150, 60);

  // ===============================
  // Client Section
  // ===============================

  doc.setFillColor(240);
  doc.rect(15, 68, 180, 10, "F");

  doc.setFont("helvetica", "bold");
  doc.text("Bill To", 18, 75);

  doc.setFont("helvetica", "normal");

  doc.text(quotation.client, 18, 85);

  doc.text(quotation.phone, 18, 92);

  doc.text(quotation.email, 18, 99);

  // ===============================
  // Product Table
  // ===============================

  autoTable(doc, {

    startY: 108,

    head: [[
      "Product",
      "Qty",
      "Price",
      "GST",
      "Amount"
    ]],

    body: quotation.products.map(item => [

      item.name,

      item.qty,

      `Rs. ${item.price}`,

      `${item.gst}%`,

      `Rs. ${(
        item.qty *
        item.price *
        (1 + item.gst / 100)
      ).toFixed(2)}`

    ]),

    theme: "grid",

    headStyles: {

      fillColor: primary,

      textColor: 255,

      halign: "center",

      fontStyle: "bold",

    },

    bodyStyles: {

      halign: "center",

    },

    alternateRowStyles: {

      fillColor: [248, 248, 248],

    },

  });

  // ===============================
  // Total Section
  // ===============================

  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFont("helvetica", "bold");

  doc.text(
    `Grand Total : Rs. ${quotation.amount.toFixed(2)}`,
    140,
    finalY
  );

  // ===============================
  // Notes
  // ===============================

  doc.setFontSize(11);

  doc.text(
    "Notes",
    15,
    finalY + 20
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    quotation.notes || "Thank you for your business.",
    15,
    finalY + 28
  );

  // ===============================
  // Terms
  // ===============================

  doc.setFont("helvetica", "bold");

  doc.text(
    "Terms & Conditions",
    15,
    finalY + 48
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    [
      "• Quotation valid for 15 days.",
      "• Payment within 7 days.",
      "• Taxes as applicable.",
      "• Goods once sold cannot be returned."
    ],
    15,
    finalY + 56
  );

  // ===============================
  // Signature
  // ===============================

  doc.setFont("helvetica", "bold");

  doc.text(
    "Authorized Signature",
    140,
    finalY + 75
  );

  doc.line(
    135,
    finalY + 72,
    190,
    finalY + 72
  );

  // ===============================

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