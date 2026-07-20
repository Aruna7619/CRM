import React, { useState } from "react";
import "../styles/addTemplateModal.css";

const AddTemplateModal = ({
  closeModal,
  addTemplate,
}) => {

  const [template, setTemplate] = useState({
    title: "",
    category: "",
    platform: "",
    caption: "",
    image: "",
    video: "",
  });

  const handleChange = (e) => {
    setTemplate({
      ...template,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {

    if (e.target.files[0]) {

      setTemplate({
        ...template,
        image: URL.createObjectURL(e.target.files[0]),
      });

    }

  };

  const handleVideo = (e) => {

    if (e.target.files[0]) {

      setTemplate({
        ...template,
        video: URL.createObjectURL(e.target.files[0]),
      });

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addTemplate(template);

    alert("Template Added Successfully!");

    closeModal();

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Add Social Media Template</h2>

        <form onSubmit={handleSubmit}>

          <label>Template Name</label>

          <input
            type="text"
            name="title"
            placeholder="Enter Template Name"
            value={template.title}
            onChange={handleChange}
            required
          />

          <label>Category</label>

          <select
            name="category"
            value={template.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Home Loan</option>
            <option>Personal Loan</option>
            <option>Gold Loan</option>
            <option>Business Loan</option>
            <option>Credit Card</option>
            <option>Insurance</option>
            <option>Festival</option>
            <option>General</option>
          </select>

          <label>Platform</label>

          <select
            name="platform"
            value={template.platform}
            onChange={handleChange}
            required
          >
            <option value="">Select Platform</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>WhatsApp</option>
            <option>LinkedIn</option>
            <option>YouTube</option>
          </select>

          <label>Caption</label>

          <textarea
            rows="4"
            name="caption"
            placeholder="Enter Caption"
            value={template.caption}
            onChange={handleChange}
          />

          <label>Upload Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          <label>Upload Video (Optional)</label>

          <input
            type="file"
            accept="video/*"
            onChange={handleVideo}
          />

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Template
            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default AddTemplateModal;