import React from "react";
import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import "../../styles/employeeTable.css";

const EmployeeTable = ({
  employees,
  setSelectedEmployee,
  setIsModalOpen,
  setIsDetailsOpen,
  setIsDeleteOpen,
}) => {

  const handleView = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailsOpen(true);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDelete = (employee) => {
    setSelectedEmployee(employee);
    setIsDeleteOpen(true);
  };

  if (employees.length === 0) {
    return (
      <div className="employee-table-container">
        <p className="no-data">
          No employees found.
        </p>
      </div>
    );
  }

  return (
    <div className="employee-table-container">

      <table className="employee-table">

        <thead>

          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th width="170">Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.employeeId}</td>

              <td>{employee.name}</td>

              <td>{employee.department}</td>

              <td>{employee.designation}</td>

              <td>{employee.joiningDate}</td>

              <td>

                <span
                  className={`employee-status ${employee.status.toLowerCase()}`}
                >
                  {employee.status}
                </span>

              </td>

              <td className="actions">

                <button
                  className="view-btn"
                  onClick={() => handleView(employee)}
                >
                  <FiEye />
                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(employee)}
                >
                  <FiEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(employee)}
                >
                  <FiTrash2 />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default EmployeeTable;