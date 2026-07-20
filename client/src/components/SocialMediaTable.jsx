import React from "react";
import {
  FiEye,
  FiEdit2,
  FiTrash2,
  FiDownload,
} from "react-icons/fi";
import "../styles/socialMediaTable.css";

const SocialMediaTable = ({
  posts,
  onView,
  onEdit,
  onDelete,
  onDownload,
}) => {
  return (
    <div className="social-table-container">

      <table className="social-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Platform</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {posts.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Posts Found
              </td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id}>

                <td>{post.id}</td>

                <td>{post.title}</td>

                <td>{post.category}</td>

                <td>{post.platform}</td>

                <td>{post.date}</td>

                <td>
                  <span
                    className={
                      post.status === "Approved"
                        ? "status-approved"
                        : post.status === "Pending"
                        ? "status-pending"
                        : "status-rejected"
                    }
                  >
                    {post.status}
                  </span>
                </td>

                <td className="action-column">

                  <button
                    type="button"
                    className="action-btn view-btn"
                    onClick={() => onView(post)}
                    title="View"
                  >
                    <FiEye />
                  </button>

                  <button
                    type="button"
                    className="action-btn edit-btn"
                    onClick={() => onEdit(post)}
                    title="Edit"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    type="button"
                    className="action-btn delete-btn"
                    onClick={() => onDelete(post)}
                    title="Delete"
                  >
                    🗑
                  </button>

                  <button
                    type="button"
                    className="action-btn download-btn"
                    onClick={() => onDownload(post)}
                    title="Download"
                  >
                    ⤓
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default SocialMediaTable;