import React from "react";
import AdminLayout from "../components/AdminLayout";
import DashboardStatCard from "../components/DashboardStatCard";
import AdminRecentLeadsTable from "../components/AdminRecentLeadsTable";

import "../styles/adminDashboard.css";
import {
  FiUsers,
  FiUserCheck,
  FiFileText,
  FiPlusCircle,
  FiCreditCard,
  FiDollarSign,
  FiShield,
  FiClock
} from "react-icons/fi";

const CRMAdminDashboard = () => {
  return (
    <AdminLayout>

      <h2 style={{ marginBottom: "20px" }}>
        Admin Dashboard
      </h2>

      <div className="stats-section-admin">

        <div className="stats-grid">
          <DashboardStatCard title="Total Agents" value="3" icon={<FiUsers />} color="blue" />
          <DashboardStatCard title="Active Agents" value="9" icon={<FiUserCheck />} color="green" />
          <DashboardStatCard title="Total Leads" value="48" icon={<FiFileText />} color="purple" />
          <DashboardStatCard title="New Leads Today" value="5" icon={<FiPlusCircle />} color="orange" />
        </div>

        <div className="stats-grid">
          <DashboardStatCard title="Disbursed Loans" value="18" icon={<FiCreditCard />} color="teal" />
          <DashboardStatCard title="Total Payouts" value="₹75K" icon={<FiDollarSign />} color="gold" />
          <DashboardStatCard title="Pending KYC Approvals" value="6" icon={<FiShield />} color="red" />
          <DashboardStatCard title="Pending Follow-Ups" value="4" icon={<FiClock />} color="gray" />
        </div>

      </div>

      <div style={{ marginTop: "30px" }}>
        
      </div>

      <div style={{ marginTop: "30px" }}>
        <AdminRecentLeadsTable />
      </div>

    </AdminLayout>
  );
};

export default CRMAdminDashboard;