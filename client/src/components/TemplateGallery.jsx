import React from "react";
import "../styles/templateGallery.css";

const TemplateGallery = ({ templates, onSelect }) => {

  if (templates.length === 0) {
    return (
      <div className="no-template">
        <h3>No Templates Available</h3>
        <p>Click + Add Template to create your first template.</p>
      </div>
    );
  }

  return (

    <div className="template-gallery">

      {templates.map((template) => (

        <div
          key={template.id}
          className="template-item"
          onClick={() => onSelect(template)}
        >

          <img
            src={template.image}
            alt={template.title}
            className="template-image"
          />

          <div className="template-info">

            <h4>{template.title}</h4>

            <p>{template.platform}</p>

          </div>

        </div>

      ))}

    </div>

  );

};

export default TemplateGallery;