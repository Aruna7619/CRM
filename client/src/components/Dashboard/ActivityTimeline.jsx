import React from "react";
import {
  FiUserPlus,
  FiFileText,
  FiCreditCard,
  FiClipboard,
} from "react-icons/fi";
import "../../styles/activityTimeline.css";

const activities = [
  {
    id: 1,
    icon: <FiUserPlus />,
    title: "New Lead Added",
    description: "Rahul Sharma was added as a new lead.",
    time: "10 mins ago",
  },
  {
    id: 2,
    icon: <FiClipboard />,
    title: "Quotation Sent",
    description: "Quotation sent to ABC Pvt Ltd.",
    time: "30 mins ago",
  },
  {
    id: 3,
    icon: <FiFileText />,
    title: "Invoice Created",
    description: "Invoice INV-001 generated.",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: <FiCreditCard />,
    title: "Payment Received",
    description: "₹12,500 received from XYZ Solutions.",
    time: "2 hours ago",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="activity-timeline">
      <h3>Recent Activity</h3>

      {activities.map((activity) => (
        <div className="activity-item" key={activity.id}>
          <div className="activity-icon">
            {activity.icon}
          </div>

          <div className="activity-content">
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
            <span>{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;