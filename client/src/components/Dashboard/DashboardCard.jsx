import React from "react";
import "../../styles/dashboardCard.css";

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="dashboard-card">
      <div
        className="dashboard-card-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="dashboard-card-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;