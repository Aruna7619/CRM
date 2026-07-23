import React from "react";
import "../../styles/deleteEmployeeModal.css";

const DeleteEmployeeModal = ({
  isOpen,
  onClose,
  employee,
  employees,
  setEmployees,
}) => {

  if (!isOpen || !employee) return null;

  const handleDelete = () => {
    setEmployees(
      employees.filter((emp) => emp.id !== employee.id)
    );

    onClose();
  };

  return (
    <div className="delete-employee-overlay">

      <div className="delete-employee-modal">

        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete
          <strong> {employee.name}</strong>?
        </p>

        <div className="delete-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteEmployeeModal;