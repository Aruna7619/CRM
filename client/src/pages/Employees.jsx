import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import EmployeeTable from "../components/Employees/EmployeeTable";
import EmployeeFilters from "../components/Employees/EmployeeFilters";
import EmployeeModal from "../components/Employees/EmployeeModal";
import EmployeeDetails from "../components/Employees/EmployeeDetails";
import DeleteEmployeeModal from "../components/Employees/DeleteEmployeeModal";
import "../styles/employees.css";

const initialEmployees = [
  {
    id: 1,
    employeeId: "EMP001",
    name: "Aruna M",
    email: "aruna@gmail.com",
    phone: "9876543210",
    department: "Sales",
    designation: "Sales Executive",
    joiningDate: "2026-07-15",
    status: "Active",
    address: "Bangalore",
  },
  {
    id: 2,
    employeeId: "EMP002",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9988776655",
    department: "Marketing",
    designation: "Marketing Executive",
    joiningDate: "2026-06-20",
    status: "Inactive",
    address: "Hyderabad",
  },
];

const Employees = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const filteredEmployees = employees.filter((employee) => {

    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "" ||
      employee.department === departmentFilter;

    return matchesSearch && matchesDepartment;

  });

  return (
    <AdminLayout>

      <div className="employees-page">

        <div className="employees-header">

          <h2>Employee Management</h2>

          <button
            className="add-employee-btn"
            onClick={() => {
              setSelectedEmployee(null);
              setIsModalOpen(true);
            }}
          >
            + Add Employee
          </button>

        </div>

        <EmployeeFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
        />

        <EmployeeTable
          employees={filteredEmployees}
          setSelectedEmployee={setSelectedEmployee}
          setIsModalOpen={setIsModalOpen}
          setIsDetailsOpen={setIsDetailsOpen}
          setIsDeleteOpen={setIsDeleteOpen}
        />

        <EmployeeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          employee={selectedEmployee}
          employees={employees}
          setEmployees={setEmployees}
        />

        <EmployeeDetails
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          employee={selectedEmployee}
        />

        <DeleteEmployeeModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          employee={selectedEmployee}
          employees={employees}
          setEmployees={setEmployees}
        />

      </div>

    </AdminLayout>
  );
};

export default Employees;