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



    doc.setFontSize(20);

    doc.text(
      "INVOICE",
      14,
      20
    );



    doc.setFontSize(12);


    doc.text(
      `Invoice No: ${invoice.invoiceNo}`,
      14,
      35
    );


    doc.text(
      `Date: ${invoice.date}`,
      14,
      45
    );


    doc.text(
      `Due Date: ${invoice.dueDate}`,
      14,
      55
    );



    doc.text(
      `Client: ${invoice.client}`,
      14,
      70
    );


    doc.text(
      `Phone: ${invoice.phone}`,
      14,
      80
    );


    doc.text(
      `Email: ${invoice.email}`,
      14,
      90
    );




    autoTable(doc,{

      startY:105,

      head:[
        [
          "Product",
          "Qty",
          "Price",
          "GST",
          "Total"
        ]
      ],


      body:

      invoice.products.map(
        (item)=>[

          item.name,

          item.qty,

          `₹${item.price}`,

          `${item.gst}%`,

          `₹${
            (
              Number(item.qty) *
              Number(item.price) +
              (
                Number(item.qty) *
                Number(item.price) *
                Number(item.gst)/100
              )
            )
          }`

        ]
      )

    });



    const finalY =
      doc.lastAutoTable.finalY + 15;



    doc.text(
      `Grand Total: ₹${invoice.amount}`,
      14,
      finalY
    );



    doc.save(
      `${invoice.invoiceNo}.pdf`
    );

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