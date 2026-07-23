import React, { useState } from "react";
import "../../styles/employeeForm.css";

const EmployeeForm = ({
  employee,
  employees,
  setEmployees,
  onClose,
}) => {

  const [formData, setFormData] = useState(
    employee || {
      employeeId: `EMP${String(employees.length + 1).padStart(3, "0")}`,
      name: "",
      email: "",
      phone: "",
      department: "Sales",
      designation: "",
      joiningDate: "",
      status: "Active",
      address: "",
    }
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === employee.id
            ? { ...formData, id: employee.id }
            : emp
        )
      );
    } else {
      setEmployees([
        ...employees,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    onClose();
  };

  return (
    <form
      className="employee-form"
      onSubmit={handleSubmit}
    >

      <div className="form-grid">

        <div className="form-group">
          <label>Employee ID</label>

          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>HR</option>
            <option>Finance</option>
            <option>IT</option>
          </select>
        </div>

        <div className="form-group">
          <label>Designation</label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Joining Date</label>

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

      </div>

      <div className="form-group full-width">
        <label>Address</label>

        <textarea
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">

        <button
          type="button"
          className="cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          {employee ? "Update Employee" : "Save Employee"}
        </button>

      </div>

    </form>
  );
};

export default EmployeeForm;