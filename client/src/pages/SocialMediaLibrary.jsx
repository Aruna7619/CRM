import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import SocialMediaTable from "../components/SocialMediaTable";
import AddSocialMediaModal from "../components/AddSocialMediaModal";
import ViewSocialMediaModal from "../components/ViewSocialMediaModal";

import "../styles/socialMedia.css";

const SocialMediaLibrary = () => {

  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const [showViewModal, setShowViewModal] = useState(false);
  const [viewPost, setViewPost] = useState(null);

  // Delete Modal
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedPost, setSelectedPost] = useState(null);

// Download Modal
const [showDownloadModal, setShowDownloadModal] = useState(false);
const [selectedDownload, setSelectedDownload] = useState(null);

 

  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Home Loan Offer",
      category: "Loan",
      platform: "Instagram",
      caption: "Apply for Home Loan today.",
      media: "home-loan.jpg",
      date: "15 Jul 2026",
      status: "Approved",
    },
    {
      id: 2,
      title: "Gold Loan Reel",
      category: "Gold Loan",
      platform: "Facebook",
      caption: "Lowest interest Gold Loan.",
      media: "gold.mp4",
      date: "18 Jul 2026",
      status: "Approved",
    },
    {
      id: 3,
      title: "Festival Wishes",
      category: "Festival",
      platform: "WhatsApp",
      caption: "Happy Festival!",
      media: "festival.jpg",
      date: "20 Jul 2026",
      status: "Pending",
    },
  ]);

  // Search

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase()) ||
      post.platform.toLowerCase().includes(search.toLowerCase())
  );

  // Add

  const addPost = (newPost) => {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        date: new Date().toLocaleDateString(),
        ...newPost,
      },
    ]);
  };

  // Update

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  };

  // View

  const handleView = (post) => {
    setViewPost(post);
    setShowViewModal(true);
  };

  // Edit

  const handleEdit = (post) => {
    setEditPost(post);
    setShowModal(true);
  };

  // Delete

  const deletePost = (post) => {
    setSelectedPost(post);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setPosts(
      posts.filter(
        (post) => post.id !== selectedPost.id
      )
    );

    setShowDeleteModal(false);
    setSelectedPost(null);
  };

  // Download

 // Download

const downloadPost = (post) => {
  setSelectedDownload(post);
  setShowDownloadModal(true);
};

const confirmDownload = () => {

  // Download logic can be added here later
  console.log("Downloading:", selectedDownload);

  setShowDownloadModal(false);
  setSelectedDownload(null);
};
  return (

    <AdminLayout>

      <div className="social-page">

        <div className="social-header">

          <h2>Social Media Library</h2>

          <button
            className="add-social-btn"
            onClick={() => {
              setEditPost(null);
              setShowModal(true);
            }}
          >
            + Upload Post
          </button>

        </div>

        <div className="social-search">

          <input
            type="text"
            placeholder="Search Post..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <SocialMediaTable
          posts={filteredPosts}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={deletePost}
          onDownload={downloadPost}
        />

      </div>

      {showModal && (
        <AddSocialMediaModal
          closeModal={() => setShowModal(false)}
          addPost={addPost}
          updatePost={updatePost}
          editPost={editPost}
        />
      )}

      {showViewModal && (
        <ViewSocialMediaModal
          post={viewPost}
          closeModal={() => {
            setShowViewModal(false);
            setViewPost(null);
          }}
        />
      )}

      {showDeleteModal && (
        <div className="delete-modal-overlay">

          <div className="delete-modal">

            <h2>Delete Post</h2>

            <p>
              Are you sure you want to delete
              <strong> {selectedPost?.title}</strong>?
            </p>

            <div className="delete-modal-buttons">

              <button
                className="cancel-btn"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedPost(null);
                }}
              >
                Cancel
              </button>

              <button
                className="confirm-delete-btn"
                onClick={confirmDelete}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}



{/* Download Modal */}

{showDownloadModal && (

  <div className="delete-modal-overlay">

    <div className="delete-modal">

      <h2>Download Post</h2>

      <p>
        Are you sure you want to download
        <strong> {selectedDownload?.title}</strong>?
      </p>

      <div className="delete-modal-buttons">

        <button
          className="cancel-btn"
          onClick={() => {
            setShowDownloadModal(false);
            setSelectedDownload(null);
          }}
        >
          Cancel
        </button>

        <button
          className="save-btn"
          onClick={confirmDownload}
        >
          Download
        </button>

      </div>

    </div>

  </div>

)}


    </AdminLayout>
  );
};

export default SocialMediaLibrary;