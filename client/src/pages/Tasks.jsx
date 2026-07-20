import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import TaskTable from "../components/Tasks/TaskTable";
import TaskFilters from "../components/Tasks/TaskFilters";
import TaskModal from "../components/Tasks/TaskModal";
import TaskDetails from "../components/Tasks/TaskDetails";
import DeleteTaskModal from "../components/Tasks/DeleteTaskModal";
import "../styles/tasks.css";

const initialTasks = [
  {
    id: 1,
    taskNo: "TASK001",
    title: "Follow up with ABC Pvt Ltd",
    description: "Call client regarding quotation approval.",
    assignedTo: "Aruna",
    priority: "High",
    status: "Pending",
    dueDate: "2026-07-25",
    createdDate: "2026-07-20",
  },
  {
    id: 2,
    taskNo: "TASK002",
    title: "Prepare Invoice",
    description: "Generate invoice for XYZ Solutions.",
    assignedTo: "Admin",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2026-07-24",
    createdDate: "2026-07-20",
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const [selectedTask, setSelectedTask] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.taskNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <AdminLayout>
      <div className="tasks-page">

        <div className="tasks-header">
          <h2>Task Management</h2>

          <button
            className="add-task-btn"
            onClick={() => {
              setSelectedTask(null);
              setIsModalOpen(true);
            }}
          >
            + New Task
          </button>
        </div>

        <TaskFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <TaskTable
          tasks={filteredTasks}
          setSelectedTask={setSelectedTask}
          setIsModalOpen={setIsModalOpen}
          setIsDetailsOpen={setIsDetailsOpen}
          setIsDeleteOpen={setIsDeleteOpen}
        />

        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          task={selectedTask}
          tasks={tasks}
          setTasks={setTasks}
        />

        <TaskDetails
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          task={selectedTask}
        />

        <DeleteTaskModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          task={selectedTask}
          tasks={tasks}
          setTasks={setTasks}
        />

      </div>
    </AdminLayout>
  );
};

export default Tasks;