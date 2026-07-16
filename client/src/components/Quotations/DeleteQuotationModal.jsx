import React from "react";
import "../../styles/deleteQuotationModal.css";

const DeleteQuotationModal = ({
  isOpen,
  onClose,
  quotation,
  quotations,
  setQuotations,
}) => {
  if (!isOpen || !quotation) return null;

  const handleDelete = () => {
    const updatedQuotations = quotations.filter(
      (item) => item.id !== quotation.id
    );

    setQuotations(updatedQuotations);
    onClose();
  };

  return (
    <div className="delete-quotation-overlay">
      <div className="delete-quotation-modal">
        <h2>Delete Quotation</h2>

        <p>
          Are you sure you want to delete
          <strong> {quotation.quoteNo}</strong>?
        </p>

        <div className="delete-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuotationModal;