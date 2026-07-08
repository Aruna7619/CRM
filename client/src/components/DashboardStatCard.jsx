import React from "react";
import "../styles/dashboardStatCard.css";

const DashboardStatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card-admin">

      {/* LEFT SIDE */}
      <div className="stat-info-admin">
        <div className="stat-title-admin">{title}</div>
        <div className="stat-value-admin">{value}</div>
      </div>

      {/* RIGHT ICON */}
      <div className={`stat-icon-admin ${color}`}>
        {icon}
      </div>

    </div>
  );
};

export default DashboardStatCard;