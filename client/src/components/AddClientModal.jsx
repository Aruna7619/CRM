import React, { useState, useEffect } from "react";
import "../styles/addClientModal.css";

const AddClientModal = ({
  closeModal,
  addClient,
  updateClient,
  editClient,
}) => {
  const [client, setClient] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    if (editClient) {
      setClient(editClient);
    } else {
      setClient({
        name: "",
        company: "",
        phone: "",
        email: "",
        status: "Active",
      });
    }
  }, [editClient]);

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editClient) {
      updateClient(client);
      alert("Client Updated Successfully!");
    } else {
      addClient(client);
      alert("Client Added Successfully!");
    }

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>
          {editClient ? "Edit Client" : "Add New Client"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={client.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={client.company}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={client.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={client.email}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={client.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
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
              {editClient ? "Update Client" : "Save Client"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddClientModal;