import React from "react";
import EmployeeForm from "./EmployeeForm";
import "../../styles/employeeModal.css";

const EmployeeModal = ({
  isOpen,
  onClose,
  employee,
  employees,
  setEmployees,
}) => {

  if (!isOpen) return null;

  return (
    <div className="employee-modal-overlay">

      <div className="employee-modal">

        <div className="employee-modal-header">

          <h2>
            {employee ? "Edit Employee" : "Add Employee"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <EmployeeForm
          employee={employee}
          employees={employees}
          setEmployees={setEmployees}
          onClose={onClose}
        />

      </div>

    </div>
  );
};

export default EmployeeModal;