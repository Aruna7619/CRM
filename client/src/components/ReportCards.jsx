import React from "react";
import {
  FiUsers,
  FiUserCheck,
  FiFileText,
  FiCreditCard,
  FiDollarSign,
  FiImage,
} from "react-icons/fi";

import "../styles/reportCards.css";

const ReportCards = () => {

  const cards = [
    {
      id: 1,
      title: "Total Leads",
      value: 120,
      icon: <FiUsers />,
    },
    {
      id: 2,
      title: "Total Clients",
      value: 85,
      icon: <FiUserCheck />,
    },
    {
      id: 3,
      title: "Quotations",
      value: 48,
      icon: <FiFileText />,
    },
    {
      id: 4,
      title: "Invoices",
      value: 42,
      icon: <FiCreditCard />,
    },
    {
      id: 5,
      title: "Payments",
      value: "₹2,45,000",
      icon: <FiDollarSign />,
    },
    {
      id: 6,
      title: "Social Posts",
      value: 76,
      icon: <FiImage />,
    },
  ];

  return (

    <div className="report-card-grid">

      {cards.map((card) => (

        <div
          key={card.id}
          className="report-card"
        >

          <div className="report-icon">

            {card.icon}

          </div>

          <div>

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </div>

  );

};

export default ReportCards;