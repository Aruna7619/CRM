import React from "react";
import "../styles/addSocialMediaModal.css";

const ViewSocialMediaModal = ({ post, closeModal }) => {

  if (!post) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>Social Media Post Details</h2>

        <div className="view-details">

          <div className="view-group">
            <label>Post Title</label>
            <input value={post.title} disabled />
          </div>

          <div className="view-group">
            <label>Category</label>
            <input value={post.category} disabled />
          </div>

          <div className="view-group">
            <label>Platform</label>
            <input value={post.platform} disabled />
          </div>

          <div className="view-group">
            <label>Caption</label>

            <textarea
              value={post.caption}
              rows="4"
              disabled
            />

          </div>

          <div className="view-group">
            <label>Media File</label>
            <input value={post.media} disabled />
          </div>

          <div className="view-group">
            <label>Status</label>
            <input value={post.status} disabled />
          </div>

          <div className="view-group">
            <label>Upload Date</label>
            <input value={post.date} disabled />
          </div>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ViewSocialMediaModal;