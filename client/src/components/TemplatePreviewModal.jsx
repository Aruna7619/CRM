import React from "react";
import "../styles/templatePreviewModal.css";

const TemplatePreviewModal = ({
  template,
  closeModal,
  onUse,
  onDownload,
  onDelete,
}) => {

  if (!template) return null;

  return (

    <div className="modal-overlay">

      <div className="preview-modal">

        {/* Header */}

        <div className="preview-header">

          <h2>{template.title}</h2>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </button>

        </div>

        {/* Body */}

        <div className="preview-body">

          <img
            src={template.image}
            alt={template.title}
            className="preview-image"
          />

          <div className="preview-details">

            <div className="detail-box">

              <label>Platform</label>

              <p>{template.platform}</p>

            </div>

            <div className="detail-box">

              <label>Caption</label>

              <div className="caption-box">

                {template.caption}

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="preview-footer">

          <button
            className="use-btn"
            onClick={() => onUse(template)}
          >
            ✅ Use Template
          </button>

          <button
            className="download-btn"
            onClick={() => onDownload(template)}
          >
            ⬇ Download
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(template.id)}
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>

  );

};

export default TemplatePreviewModal;