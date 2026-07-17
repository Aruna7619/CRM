import React, { useState } from "react";
import "../styles/addTemplateModal.css";

const AddTemplateModal = ({
  closeModal,
  addTemplate,
}) => {

  const [template, setTemplate] = useState({
    title: "",
    platform: "",
    caption: "",
    image: "",
  });

  const handleChange = (e) => {
    setTemplate({
      ...template,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setTemplate({
      ...template,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTemplate(template);

    closeModal();
  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Add Template</h2>

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
            required
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