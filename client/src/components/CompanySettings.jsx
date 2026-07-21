import React, { useState } from "react";
import "../styles/companySettings.css";

const CompanySettings = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState({
    companyName: "Windflex Creative Technology Pvt Ltd",
    email: "info@windflex.com",
    phone: "+91 9876543210",
    website: "www.windflex.com",
    gst: "29ABCDE1234F1Z5",
    address: "Bangalore, Karnataka, India",
  });

  const handleChange = (e) => {

    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Company Details Updated Successfully!");

    setIsEditing(false);

  };

  return (

    <div className="settings-card">

      <div className="settings-title">

        <h3>Company Information</h3>

        {!isEditing && (

          <button
            className="edit-company-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏ Edit
          </button>

        )}

      </div>

      {!isEditing ? (

        <div className="company-view">

          <div className="company-row">
            <span>Company Name</span>
            <strong>{company.companyName}</strong>
          </div>

          <div className="company-row">
            <span>Email</span>
            <strong>{company.email}</strong>
          </div>

          <div className="company-row">
            <span>Phone</span>
            <strong>{company.phone}</strong>
          </div>

          <div className="company-row">
            <span>Website</span>
            <strong>{company.website}</strong>
          </div>

          <div className="company-row">
            <span>GST Number</span>
            <strong>{company.gst}</strong>
          </div>

          <div className="company-row">
            <span>Address</span>
            <strong>{company.address}</strong>
          </div>

        </div>

      ) : (

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            value={company.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            value={company.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="website"
            value={company.website}
            onChange={handleChange}
          />

          <input
            type="text"
            name="gst"
            value={company.gst}
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="address"
            value={company.address}
            onChange={handleChange}
          />

          <div className="settings-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-company-btn"
            >
              Save Changes
            </button>

          </div>

        </form>

      )}

    </div>

  );

};

export default CompanySettings;