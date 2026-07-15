import React from "react";
import {
  FiUserPlus,
  FiUsers,
  FiFileText,
  FiClipboard,
} from "react-icons/fi";
import "../../styles/quickActions.css";

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>

      <div className="action-buttons">
        <button>
          <FiUserPlus />
          Add Lead
        </button>

        <button>
          <FiUsers />
          Add Client
        </button>

        <button>
          <FiClipboard />
          Create Quotation
        </button>

        <button>
          <FiFileText />
          Create Invoice
        </button>
      </div>
    </div>
  );
};

export default QuickActions;