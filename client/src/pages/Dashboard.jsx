import React from "react";
import AdminLayout from "../components/AdminLayout";
import RevenueChart from "../components/Dashboard/RevenueChart";

import DashboardCard from "../components/Dashboard/DashboardCard";
import RecentLeads from "../components/Dashboard/RecentLeads";
import RecentInvoices from "../components/Dashboard/RecentInvoices";
import UpcomingTasks from "../components/Dashboard/UpcomingTasks";
import QuickActions from "../components/Dashboard/QuickActions";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline";

import {
    FiUsers,
    FiUserCheck,
    FiDollarSign,
    FiFileText,
} from "react-icons/fi";

import "../styles/dashboard.css";

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="dashboard">

                <h2 className="dashboard-title">
                    Welcome Back, Admin 👋
                </h2>

                <div className="dashboard-cards">

                    <DashboardCard
                        title="Total Leads"
                        value="120"
                        icon={<FiUsers />}
                        color="#3B82F6"
                    />

                    <DashboardCard
                        title="Total Clients"
                        value="85"
                        icon={<FiUserCheck />}
                        color="#10B981"
                    />

                    <DashboardCard
                        title="Revenue"
                        value="₹5,40,000"
                        icon={<FiDollarSign />}
                        color="#F59E0B"
                    />

                    <DashboardCard
                        title="Pending Invoices"
                        value="12"
                        icon={<FiFileText />}
                        color="#EF4444"
                    />

                </div>
            </div>

            
            <div className="dashboard-middle">
                <RevenueChart />
                <UpcomingTasks />
            </div>

            <div className="dashboard-tables">
                <RecentLeads />
                <RecentInvoices />
            </div>
            <QuickActions />
            <ActivityTimeline />
        </AdminLayout>
    );
};

export default Dashboard;