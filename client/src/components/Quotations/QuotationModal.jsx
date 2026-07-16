import React from "react";
import QuotationForm from "./QuotationForm";
import "../../styles/quotationModal.css";

const QuotationModal = ({
  isOpen,
  onClose,
  quotation,
  quotations,
  setQuotations,
}) => {
  if (!isOpen) return null;

  return (
    <div className="quotation-modal-overlay">
      <div className="quotation-modal">

        <div className="quotation-modal-header">
          <h2>
            {quotation ? "Edit Quotation" : "New Quotation"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <QuotationForm
          quotation={quotation}
          quotations={quotations}
          setQuotations={setQuotations}
          onClose={onClose}
        />

      </div>
    </div>
  );
};

export default QuotationModal;