import React from "react";
import "../../styles/convertInvoiceModal.css";

const ConvertInvoiceModal = ({
  isOpen,
  onClose,
  quotation,
  quotations,
  setQuotations,
}) => {
  if (!isOpen || !quotation) return null;

  const handleConvert = () => {
    const updatedQuotations = quotations.map((item) =>
      item.id === quotation.id
        ? { ...item, status: "Converted" }
        : item
    );

    setQuotations(updatedQuotations);

    alert(
      `Quotation ${quotation.quoteNo} has been converted to Invoice successfully!`
    );

    onClose();
  };

  return (
    <div className="convert-overlay">
      <div className="convert-modal">

        <h2>Convert to Invoice</h2>

        <p>
          Are you sure you want to convert
          <strong> {quotation.quoteNo} </strong>
          into an Invoice?
        </p>

        <div className="convert-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="convert-btn"
            onClick={handleConvert}
          >
            Convert
          </button>

        </div>

      </div>
    </div>
  );
};

export default ConvertInvoiceModal;