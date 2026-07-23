import React from "react";
import "../../styles/employeeDetails.css";

const EmployeeDetails = ({
  isOpen,
  onClose,
  employee,
}) => {

  if (!isOpen || !employee) return null;

  return (
    <div className="employee-details-overlay">

      <div className="employee-details">

        <div className="employee-details-header">

          <h2>Employee Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className="details-grid">

          <div>
            <strong>Employee ID</strong>
            <p>{employee.employeeId}</p>
          </div>

          <div>
            <strong>Full Name</strong>
            <p>{employee.name}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{employee.email}</p>
          </div>

          <div>
            <strong>Phone</strong>
            <p>{employee.phone}</p>
          </div>

          <div>
            <strong>Department</strong>
            <p>{employee.department}</p>
          </div>

          <div>
            <strong>Designation</strong>
            <p>{employee.designation}</p>
          </div>

          <div>
            <strong>Joining Date</strong>
            <p>{employee.joiningDate}</p>
          </div>

          <div>
            <strong>Status</strong>

            <span
              className={`employee-status ${employee.status.toLowerCase()}`}
            >
              {employee.status}
            </span>

          </div>

        </div>

        <div className="address-section">

          <strong>Address</strong>

          <p>{employee.address}</p>

        </div>

        <div className="details-footer">

          <button
            className="close-details-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default EmployeeDetails;