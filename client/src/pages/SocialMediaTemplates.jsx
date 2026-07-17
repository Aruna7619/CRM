import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import AddTemplateModal from "../components/AddTemplateModal";
import TemplateGallery from "../components/TemplateGallery";
import TemplatePreviewModal from "../components/TemplatePreviewModal";

import "../styles/socialMediaTemplates.css";

const SocialMediaTemplates = () => {

  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [templates, setTemplates] = useState([]);

  // Add Template
  const addTemplate = (newTemplate) => {
    setTemplates([
      ...templates,
      {
        id: Date.now(),
        ...newTemplate,
      },
    ]);
  };

  // Open Preview
  const handleSelect = (template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  // Use Template
  const handleUse = (template) => {
    alert(`"${template.title}" selected successfully.`);
    setShowPreview(false);
  };

  // Download Template
  const handleDownload = (template) => {
    const link = document.createElement("a");
    link.href = template.image;
    link.download = template.title;
    link.click();
  };

  // Delete Template
  const handleDelete = (id) => {
    if (window.confirm("Delete this template?")) {
      setTemplates(
        templates.filter((template) => template.id !== id)
      );
      setShowPreview(false);
    }
  };

  return (

    <AdminLayout>

      <div className="template-page">

        <div className="template-header">

          <h2>Social Media Templates</h2>

          <button
            className="add-template-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Template
          </button>

        </div>

        <TemplateGallery
          templates={templates}
          onSelect={handleSelect}
        />

      </div>

      {/* Add Template */}

      {showModal && (

        <AddTemplateModal
          closeModal={() => setShowModal(false)}
          addTemplate={addTemplate}
        />

      )}

      {/* Preview Template */}

      {showPreview && (

        <TemplatePreviewModal
          template={selectedTemplate}
          closeModal={() => {
            setShowPreview(false);
            setSelectedTemplate(null);
          }}
          onUse={handleUse}
          onDownload={handleDownload}
          onDelete={handleDelete}
        />

      )}

    </AdminLayout>

  );
};

export default SocialMediaTemplates;