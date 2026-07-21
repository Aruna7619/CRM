import React from "react";
import {
  FiUsers,
  FiShield,
  FiUserCheck,
  FiUserX,
} from "react-icons/fi";

import "../styles/userCards.css";

const UserCards = () => {

  const cards = [
    {
      id: 1,
      title: "Total Users",
      value: 28,
      icon: <FiUsers />,
    },
    {
      id: 2,
      title: "Admins",
      value: 4,
      icon: <FiShield />,
    },
    {
      id: 3,
      title: "Employees",
      value: 24,
      icon: <FiUserCheck />,
    },
    {
      id: 4,
      title: "Inactive",
      value: 2,
      icon: <FiUserX />,
    },
  ];

  return (

    <div className="user-card-grid">

      {cards.map((card) => (

        <div
          key={card.id}
          className="user-card"
        >

          <div className="user-card-icon">

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

export default UserCards;