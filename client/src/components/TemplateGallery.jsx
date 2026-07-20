import React from "react";
import "../styles/templateGallery.css";

const TemplateGallery = ({ templates, onSelect }) => {

  if (templates.length === 0) {

    return (

      <div className="no-template">

        <h2>No Templates Available</h2>

        <p>
          Click <strong>+ Add Template</strong> to create your first template.
        </p>

      </div>

    );

  }

  return (

    <div className="template-gallery">

      {templates.map((template) => (

        <div
          key={template.id}
          className="template-item"
        >

          {/* Preview */}

          <div
            className="template-preview"
            onClick={() => onSelect(template)}
          >

            {template.image ? (

              <img
                src={template.image}
                alt={template.title}
                className="template-image"
              />

            ) : (

              <div className="template-placeholder">
                No Preview
              </div>

            )}

          </div>

          {/* Details */}

          <div className="template-info">

            <h4>{template.title}</h4>

            <p>
              <strong>Category:</strong> {template.category}
            </p>

            <p>
              <strong>Platform:</strong> {template.platform}
            </p>

          </div>

          {/* Action */}

          <div className="template-footer">

            <button
              className="preview-btn"
              onClick={() => onSelect(template)}
            >
              👁 Preview
            </button>

          </div>

        </div>

      ))}

    </div>

  );

};

export default TemplateGallery;