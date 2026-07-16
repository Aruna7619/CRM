import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import ClientTable from "../components/ClientTable";
import AddClientModal from "../components/AddClientModal";
import ViewClientModal from "../components/ViewClientModal";

import "../styles/clientManagement.css";

const ClientManagement = () => {

  const [showModal, setShowModal] = useState(false);
  const [editClient, setEditClient] = useState(null);

  // View Modal
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewClient, setViewClient] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  // Client Data
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      company: "ABC Pvt Ltd",
      phone: "9876543210",
      email: "rahul@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      company: "XYZ Solutions",
      phone: "9123456780",
      email: "priya@gmail.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "Tech World",
      phone: "9988776655",
      email: "amit@gmail.com",
      status: "Inactive",
    },
  ]);

  // Search Filter
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.company.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase()) ||
      client.phone.includes(search)
  );

  // Add Client
  const addClient = (newClient) => {
    setClients([
      ...clients,
      {
        id: clients.length + 1,
        ...newClient,
      },
    ]);
  };

  // Update Client
  const updateClient = (updatedClient) => {
    setClients(
      clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  // View Client
  const handleView = (client) => {
    setViewClient(client);
    setShowViewModal(true);
  };

  // Edit Client
  const handleEdit = (client) => {
    setEditClient(client);
    setShowModal(true);
  };

  // Delete Client Popup
  const deleteClient = (client) => {
    setSelectedClient(client);
    setShowDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete = () => {
    setClients(
      clients.filter(
        (client) => client.id !== selectedClient.id
      )
    );

    setShowDeleteModal(false);
    setSelectedClient(null);
  };

  return (
    <AdminLayout>

      <div className="client-page">

        <div className="client-header">

          <h2>Client Management</h2>

          <button
            className="add-client-btn"
            onClick={() => {
              setEditClient(null);
              setShowModal(true);
            }}
          >
            + Add Client
          </button>

        </div>

        <div className="client-search">

          <input
            type="text"
            placeholder="Search Client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <ClientTable
          clients={filteredClients}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={deleteClient}
        />

      </div>

      {/* Add / Edit Client */}
      {showModal && (
        <AddClientModal
          closeModal={() => setShowModal(false)}
          addClient={addClient}
          updateClient={updateClient}
          editClient={editClient}
        />
      )}

      {/* View Client */}
      {showViewModal && (
        <ViewClientModal
          client={viewClient}
          closeModal={() => {
            setShowViewModal(false);
            setViewClient(null);
          }}
        />
      )}

      {/* Delete Client */}
      {showDeleteModal && (
        <div className="delete-modal-overlay">

          <div className="delete-modal">

            <h2>Delete Client</h2>

            <p>
              Are you sure you want to delete
              <strong> {selectedClient?.name}</strong>?
            </p>

            <div className="delete-modal-buttons">

              <button
                className="cancel-btn"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedClient(null);
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

    </AdminLayout>
  );
};

export default ClientManagement;