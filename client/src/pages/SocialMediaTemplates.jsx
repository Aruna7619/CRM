import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AdminLayout from "../components/AdminLayout";
import AddTemplateModal from "../components/AddTemplateModal";
import TemplateGallery from "../components/TemplateGallery";
import TemplatePreviewModal from "../components/TemplatePreviewModal";

import { useTemplate } from "../context/TemplateContext";

import "../styles/socialMediaTemplates.css";

const SocialMediaTemplates = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { setSelectedTemplate } = useTemplate();

  // Change to "employee" to test employee view
  const userRole = "admin";

  const employeeMode = location.state?.mode === "employee";

  const hideAdminControls =
    userRole === "employee" || employeeMode;

  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selected, setSelected] = useState(null);

  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Home Loan EMI",
      category: "Home Loan",
      platform: "Instagram",
      caption: "Own your dream home with lowest EMI.",
      image: "https://via.placeholder.com/350x500",
    },
    {
      id: 2,
      title: "Gold Loan Banner",
      category: "Gold Loan",
      platform: "Facebook",
      caption: "Instant Gold Loan at low interest.",
      image: "https://via.placeholder.com/350x500",
    },
    {
      id: 3,
      title: "Festival Wishes",
      category: "Festival",
      platform: "WhatsApp",
      caption: "Happy Festival!",
      image: "https://via.placeholder.com/350x500",
    },
  ]);

  const addTemplate = (newTemplate) => {
    setTemplates([
      ...templates,
      {
        id: Date.now(),
        ...newTemplate,
      },
    ]);
  };

  const handleSelect = (template) => {
    setSelected(template);
    setShowPreview(true);
  };

  const handleUse = (template) => {

    // Save selected template globally
    setSelectedTemplate(template);

    // Return to Social Media Library
    navigate("/social-media");

  };

  const handleDownload = (template) => {

    const link = document.createElement("a");
    link.href = template.image;
    link.download = template.title;
    link.click();

  };

  const handleDelete = (id) => {

    if (window.confirm("Delete this template?")) {

      setTemplates(
        templates.filter((item) => item.id !== id)
      );

      setShowPreview(false);

    }

  };

  return (

    <AdminLayout>

      <div className="template-page">

        <div className="template-header">

          <h2>Social Media Templates</h2>

          {!hideAdminControls && (

            <button
              className="add-template-btn"
              onClick={() => setShowModal(true)}
            >
              + Add Template
            </button>

          )}

        </div>

        <TemplateGallery
          templates={templates}
          onSelect={handleSelect}
        />

      </div>

      {!hideAdminControls && showModal && (

        <AddTemplateModal
          closeModal={() => setShowModal(false)}
          addTemplate={addTemplate}
        />

      )}

      {showPreview && (

        <TemplatePreviewModal
          template={selected}
          closeModal={() => {
            setShowPreview(false);
            setSelected(null);
          }}
          onUse={handleUse}
          onDownload={handleDownload}
          onDelete={!hideAdminControls ? handleDelete : null}
          isEmployee={hideAdminControls}
        />

      )}

    </AdminLayout>

  );

};

export default SocialMediaTemplates;