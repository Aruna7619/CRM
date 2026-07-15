import React from "react";
import AdminLayout from "../components/AdminLayout";
import "../styles/clientManagement.css";

const ClientManagement = () => {
  return (
    <AdminLayout>

      <div className="client-page">

        <div className="client-header">
          <h2>Client Management</h2>

          <button className="add-client-btn">
            + Add Client
          </button>
        </div>

        <div className="client-search">
          <input
            type="text"
            placeholder="Search Client..."
          />
        </div>

      </div>

    </AdminLayout>
  );
};

export default ClientManagement;