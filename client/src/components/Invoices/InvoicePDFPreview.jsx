import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../styles/invoicePDFPreview.css";


const InvoicePDFPreview = ({
  isOpen,
  onClose,
  invoice,
}) => {


  if (!isOpen || !invoice) return null;



 const downloadPDF = () => {

  const doc = new jsPDF();

  const primary = [41, 128, 185];

  // =============================
  // Company Header
  // =============================

  doc.setFillColor(...primary);
  doc.rect(0, 0, 210, 35, "F");

  doc.setTextColor(255);

  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");

  doc.text(
    "YOUR COMPANY NAME",
    105,
    15,
    { align: "center" }
  );

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  doc.text(
    "123 Business Street, Bangalore",
    105,
    23,
    { align: "center" }
  );

  doc.text(
    "Phone : +91 9876543210",
    105,
    29,
    { align: "center" }
  );

  // =============================
  // Invoice Title
  // =============================

  doc.setTextColor(0);

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");

  doc.text(
    "INVOICE",
    105,
    50,
    { align: "center" }
  );

  // =============================
  // Invoice Information
  // =============================

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  doc.text(
    `Invoice No : ${invoice.invoiceNo}`,
    15,
    65
  );

  doc.text(
    `Invoice Date : ${invoice.date}`,
    15,
    72
  );

  doc.text(
    `Due Date : ${invoice.dueDate}`,
    140,
    65
  );

  doc.text(
    `Status : ${invoice.status}`,
    140,
    72
  );

  // =============================
  // Bill To
  // =============================

  doc.setFillColor(240);
  doc.rect(15, 80, 180, 10, "F");

  doc.setFont("helvetica", "bold");
  doc.text("Bill To", 18, 87);

  doc.setFont("helvetica", "normal");

  doc.text(invoice.client, 18, 97);
  doc.text(invoice.phone, 18, 104);
  doc.text(invoice.email, 18, 111);

  // =============================
  // Products Table
  // =============================

  autoTable(doc, {

    startY: 120,

    head: [[
      "Product",
      "Qty",
      "Price",
      "GST",
      "Amount"
    ]],

    body: invoice.products.map(item => [

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

      fillColor: [248,248,248]

    }

  });

  // =============================
  // Total
  // =============================

  const finalY =
    doc.lastAutoTable.finalY + 12;

  doc.setFont("helvetica", "bold");

  doc.text(
    `Grand Total : Rs. ${Number(invoice.amount).toFixed(2)}`,
    135,
    finalY
  );

  // =============================
  // Payment Information
  // =============================

  doc.setFont("helvetica", "bold");

  doc.text(
    "Payment Information",
    15,
    finalY + 20
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    [
      "Bank : HDFC Bank",
      "Account No : 1234567890",
      "IFSC : HDFC0001234"
    ],
    15,
    finalY + 28
  );

  // =============================
  // Notes
  // =============================

  doc.setFont("helvetica", "bold");

  doc.text(
    "Notes",
    15,
    finalY + 55
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    invoice.notes || "Thank you for your business.",
    15,
    finalY + 63
  );

  // =============================
  // Signature
  // =============================

  doc.setFont("helvetica", "bold");

  doc.text(
    "Authorized Signature",
    140,
    finalY + 80
  );

  doc.line(
    135,
    finalY + 76,
    190,
    finalY + 76
  );

  doc.save(`${invoice.invoiceNo}.pdf`);
};



  return (

    <div className="invoice-pdf-overlay">


      <div className="invoice-pdf-modal">


        <div className="invoice-pdf-header">

          <h2>
            PDF Preview
          </h2>


          <button
            onClick={onClose}
          >
            ×
          </button>


        </div>



        <div className="pdf-preview-content">


          <h3>
            {invoice.invoiceNo}
          </h3>


          <p>
            Client:
            {invoice.client}
          </p>


          <p>
            Amount:
            ₹{invoice.amount}
          </p>


        </div>



        <button
          className="download-pdf-btn"
          onClick={downloadPDF}
        >

          Download PDF

        </button>



      </div>


    </div>

  );

};


export default InvoicePDFPreview;