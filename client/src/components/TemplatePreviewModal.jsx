import React from "react";
import "../styles/templatePreviewModal.css";

const TemplatePreviewModal = ({
  template,
  closeModal,
  onUse,
  onDownload,
  onDelete,
  isEmployee,
}) => {

  if (!template) return null;

  return (

    <div className="modal-overlay">

      <div className="preview-modal">

        {/* Header */}

        <div className="preview-header">

          <h2>Template Preview</h2>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </button>

        </div>

        {/* Body */}

        <div className="preview-body">

          <div className="preview-left">

            <img
              src={template.image}
              alt={template.title}
              className="preview-image"
            />

          </div>

          <div className="preview-right">

            <div className="detail-box">

              <label>Template Name</label>

              <p>{template.title}</p>

            </div>

            <div className="detail-box">

              <label>Category</label>

              <p>{template.category}</p>

            </div>

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

          {!isEmployee && (

            <button
              className="delete-btn"
              onClick={() => onDelete(template.id)}
            >
              🗑 Delete
            </button>

          )}

        </div>

      </div>

    </div>

  );

};

export default TemplatePreviewModal;