import React from "react";
import {
  FiUsers,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiCheckSquare,
} from "react-icons/fi";
import "../../styles/reportCards.css";

const ReportCards = ({ reportData }) => {

  const cards = [
    {
      title: "Total Leads",
      value: reportData.totalLeads,
      icon: <FiUsers />,
      color: "#2563eb",
    },
    {
      title: "Quotations",
      value: reportData.totalQuotations,
      icon: <FiFileText />,
      color: "#7c3aed",
    },
    {
      title: "Invoices",
      value: reportData.totalInvoices,
      icon: <FiCreditCard />,
      color: "#16a34a",
    },
    {
      title: "Revenue",
      value: `₹${reportData.totalRevenue.toLocaleString()}`,
      icon: <FiDollarSign />,
      color: "#ea580c",
    },
    {
      title: "Pending Tasks",
      value: reportData.pendingTasks,
      icon: <FiCheckSquare />,
      color: "#dc2626",
    },
  ];

  return (

    <div className="report-cards">

      {cards.map((card, index) => (

        <div
          className="report-card"
          key={index}
        >

          <div
            className="report-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="report-info">

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </div>

  );

};

export default ReportCards;