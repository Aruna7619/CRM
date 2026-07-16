import React, { useState, useMemo } from "react";
import ProductTable from "./ProductTable";
import "../../styles/quotationForm.css";

const QuotationForm = ({
  quotation,
  quotations,
  setQuotations,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    quoteNo:
      quotation?.quoteNo ||
      `QT${String(quotations.length + 1).padStart(3, "0")}`,
    date: quotation?.date || new Date().toISOString().split("T")[0],
    client: quotation?.client || "",
    phone: quotation?.phone || "",
    email: quotation?.email || "",
    status: quotation?.status || "Draft",
    discount: quotation?.discount || 0,
    notes: quotation?.notes || "",
  });

  const [products, setProducts] = useState(
    quotation?.products || [
      {
        id: 1,
        name: "",
        qty: 1,
        price: 0,
        gst: 18,
      },
    ]
  );

  const subtotal = useMemo(() => {
    return products.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );
  }, [products]);

  const gstAmount = useMemo(() => {
    return products.reduce(
      (sum, item) =>
        sum + (item.qty * item.price * item.gst) / 100,
      0
    );
  }, [products]);

  const grandTotal = subtotal + gstAmount - Number(formData.discount);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quotationData = {
      ...formData,
      amount: grandTotal,
      products,
      discount: Number(formData.discount),
    };

    if (quotation) {
      const updated = quotations.map((q) =>
        q.id === quotation.id
          ? { ...q, ...quotationData }
          : q
      );

      setQuotations(updated);
    } else {
      setQuotations([
        ...quotations,
        {
          id: Date.now(),
          ...quotationData,
        },
      ]);
    }

    onClose();
  };

  return (
    <form className="quotation-form" onSubmit={handleSubmit}>

      <div className="quotation-grid">

        <div className="form-group">
          <label>Quotation No</label>
          <input
            name="quoteNo"
            value={formData.quoteNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Client Name</label>
          <input
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Draft</option>
            <option>Sent</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </div>

      </div>

      <ProductTable
        products={products}
        setProducts={setProducts}
      />

      <div className="totals">

        <h4>Subtotal : ₹{subtotal.toFixed(2)}</h4>

        <h4>GST : ₹{gstAmount.toFixed(2)}</h4>

        <div className="form-group">
          <label>Discount</label>

          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>

        <h3>Grand Total : ₹{grandTotal.toFixed(2)}</h3>

      </div>

      <div className="form-group">
        <label>Notes</label>

        <textarea
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <div className="form-buttons">

        <button
          type="button"
          className="cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          {quotation ? "Update Quotation" : "Save Quotation"}
        </button>

      </div>

    </form>
  );
};

export default QuotationForm;