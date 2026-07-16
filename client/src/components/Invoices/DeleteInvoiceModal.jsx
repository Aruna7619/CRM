import React from "react";
import "../../styles/deleteInvoiceModal.css";

const DeleteInvoiceModal = ({
  isOpen,
  onClose,
  invoice,
  invoices,
  setInvoices,
}) => {

  if (!isOpen || !invoice) return null;


  const handleDelete = () => {

    const updatedInvoices =
      invoices.filter(
        (item) =>
          item.id !== invoice.id
      );


    setInvoices(updatedInvoices);

    onClose();

  };


  return (

    <div className="delete-invoice-overlay">


      <div className="delete-invoice-modal">


        <h2>
          Delete Invoice
        </h2>


        <p>
          Are you sure you want to delete
          <strong>
            {" "}{invoice.invoiceNo}
          </strong>
          ?
        </p>



        <div className="delete-actions">


          <button
            className="cancel-delete-btn"
            onClick={onClose}
          >
            Cancel
          </button>


          <button
            className="confirm-delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>


        </div>


      </div>


    </div>

  );

};


export default DeleteInvoiceModal;