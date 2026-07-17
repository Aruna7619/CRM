import React, { useState, useEffect } from "react";
import "../styles/addSocialMediaModal.css";

const AddSocialMediaModal = ({
  closeModal,
  addPost,
  updatePost,
  editPost,
}) => {

  // Dummy Templates (Later replace with API/Database)
  const templates = [
    {
      id: 1,
      title: "Home Loan EMI",
      category: "Home Loan",
      platform: "Instagram",
      caption: "Own your dream home with lowest EMI.",
      media: "home-loan.jpg",
    },
    {
      id: 2,
      title: "Gold Loan Banner",
      category: "Gold Loan",
      platform: "Facebook",
      caption: "Instant Gold Loan at low interest.",
      media: "gold-loan.jpg",
    },
    {
      id: 3,
      title: "Festival Wishes",
      category: "Festival",
      platform: "WhatsApp",
      caption: "Happy Festival to Everyone!",
      media: "festival.jpg",
    },
  ];

  const [post, setPost] = useState({
    title: "",
    template: "",
    category: "",
    platform: "",
    caption: "",
    media: "",
    status: "Approved",
  });

  useEffect(() => {
    if (editPost) {
      setPost(editPost);
    }
  }, [editPost]);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  // Template Selection
  const handleTemplateChange = (e) => {

    const templateId = e.target.value;

    const selected = templates.find(
      (item) => item.id === Number(templateId)
    );

    if (!selected) {
      setPost({
        ...post,
        template: "",
      });
      return;
    }

    setPost({
      ...post,
      template: templateId,
      title: selected.title,
      category: selected.category,
      platform: selected.platform,
      caption: selected.caption,
      media: selected.media,
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

            {templates.map((template) => (
              <option
                key={template.id}
                value={template.id}
              >
                {template.title}
              </option>
            ))}

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