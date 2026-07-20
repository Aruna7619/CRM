import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addSocialMediaModal.css";

const AddSocialMediaModal = ({
  closeModal,
  addPost,
  updatePost,
  editPost,
  selectedTemplate,
}) => {

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    template: "",
    category: "",
    platform: "",
    caption: "",
    media: "",
    status: "Approved",
  });

  // Edit Mode
  useEffect(() => {
    if (editPost) {
      setPost(editPost);
    }
  }, [editPost]);

  // Auto Fill from Selected Template
  useEffect(() => {

    if (selectedTemplate) {

      setPost((prev) => ({
        ...prev,
        template: selectedTemplate.title,
        title: selectedTemplate.title || "",
        category: selectedTemplate.category || "",
        platform: selectedTemplate.platform || "",
        caption: selectedTemplate.caption || "",
        media: selectedTemplate.image || "",
      }));

    }

  }, [selectedTemplate]);

  const handleChange = (e) => {

    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });

  };

  // Choose Template
  const handleTemplateChange = (e) => {

    const value = e.target.value;

    if (value === "choose") {

      closeModal();

      navigate("/social-media-templates", {
        state: {
          mode: "employee",
        },
      });

      return;
    }

    setPost({
      ...post,
      template: value,
    });

  };

  const handleFileChange = (e) => {

    setPost({
      ...post,
      media: e.target.files[0]?.name || "",
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editPost) {

      updatePost(post);
      alert("Post Updated Successfully!");

    } else {

      addPost(post);
      alert("Post Uploaded Successfully!");

    }

    closeModal();

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>
          {editPost ? "Edit Post" : "Upload Social Media Post"}
        </h2>

        <form onSubmit={handleSubmit}>

          <label>Select Template</label>

          <select
            name="template"
            value={post.template}
            onChange={handleTemplateChange}
          >
            <option value="">None</option>
            <option value="choose">
              Choose Template...
            </option>
          </select>

          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={post.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={post.category}
            onChange={handleChange}
            required
          />

          <select
            name="platform"
            value={post.platform}
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

          <textarea
            name="caption"
            placeholder="Caption"
            rows="4"
            value={post.caption}
            onChange={handleChange}
          />

          <label>Upload Image / Video</label>

          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
          />

          <select
            name="status"
            value={post.status}
            onChange={handleChange}
          >
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>

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
              {editPost ? "Update Post" : "Upload Post"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );
};

export default AddSocialMediaModal;