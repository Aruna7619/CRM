import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import LeadTable from "../components/Leads/LeadTable";
import LeadModal from "../components/Leads/LeadModal";
import DeleteLeadModal from "../components/Leads/DeleteLeadModal";
import LeadDetails from "../components/Leads/LeadDetails";
import LeadFilters from "../components/Leads/LeadFilters";
import "../styles/leads.css";

const initialLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Pvt Ltd",
    phone: "9876543210",
    email: "rahul@gmail.com",
    source: "Website",
    status: "New",
    notes: "Interested in CRM Software",
  },
  {
    id: 2,
    name: "Priya Singh",
    company: "XYZ Solutions",
    phone: "9988776655",
    email: "priya@gmail.com",
    source: "Facebook",
    status: "Contacted",
    notes: "Asked for pricing",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    company: "Tech World",
    phone: "9123456789",
    email: "arjun@gmail.com",
    source: "Referral",
    status: "Qualified",
    notes: "Demo scheduled",
  },
];

const Leads = () => {
  const [leads, setLeads] = useState(initialLeads);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [selectedLead, setSelectedLead] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="leads-page">
        <div className="leads-header">
          <h2>Lead Management</h2>

          <button
            className="add-lead-btn"
            onClick={() => {
              setSelectedLead(null);
              setIsModalOpen(true);
            }}
          >
            + Add Lead
          </button>
        </div>

        <LeadFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <LeadTable
          leads={filteredLeads}
          setSelectedLead={setSelectedLead}
          setIsModalOpen={setIsModalOpen}
          setIsDeleteOpen={setIsDeleteOpen}
          setIsDetailsOpen={setIsDetailsOpen}
        />

        <LeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lead={selectedLead}
          leads={leads}
          setLeads={setLeads}
        />

        <DeleteLeadModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          lead={selectedLead}
          leads={leads}
          setLeads={setLeads}
        />

        <LeadDetails
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          lead={selectedLead}
        />
      </div>
    </AdminLayout>
  );
};

export default Leads;