import React, { useState } from "react";
import "../../styles/leadForm.css";

const LeadForm = ({
  lead,
  leads,
  setLeads,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: lead?.name || "",
    company: lead?.company || "",
    email: lead?.email || "",
    phone: lead?.phone || "",
    source: lead?.source || "",
    status: lead?.status || "New",
    notes: lead?.notes || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lead) {
      // Edit Lead
      const updatedLeads = leads.map((item) =>
        item.id === lead.id
          ? { ...item, ...formData }
          : item
      );

      setLeads(updatedLeads);
    } else {
      // Add Lead
      const newLead = {
        id: Date.now(),
        ...formData,
      };

      setLeads([...leads, newLead]);
    }

    onClose();
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
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
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Lead Source</label>

          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
          >
            <option value="">Select Source</option>
            <option>Website</option>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>WhatsApp</option>
            <option>Referral</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Lost</option>
          </select>
        </div>

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
          {lead ? "Update Lead" : "Save Lead"}
        </button>
      </div>
    </form>
  );
};

export default LeadForm;