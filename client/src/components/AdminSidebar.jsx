import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
    FiGrid,
    FiUsers,
    FiFileText,
    FiCreditCard,
    FiDollarSign,
    FiUser,
    FiLogOut
} from "react-icons/fi";

import { BsBank } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";

import "../styles/adminSidebar.css";

const AdminSidebar = ({
    collapsed,
    setCollapsed,
    mobileOpen,
    setMobileOpen
}) => {



    const menuItems = [
        {
            name: "Dashboard",
            icon: <FiGrid />,
            path: "/CRMAdminDashboard",
        },
        {
            name: "Agents",
            icon: <FiUsers />,
            path: "/agent-management",
        },
        {
            name: "Leads",
            icon: <FiFileText />,
            path: "/leads",
        },
        {
            name: "Banks",
            icon: <BsBank />,
            path: "/banks",
        },
        {
            name: "Loan Types",
            icon: <FiCreditCard />,
            path: "/loan-types",
        },
        {
            name: "Payouts",
            icon: <FiDollarSign />,
            path: "/payouts",
        },
        {
            name: "Reports",
            icon: <HiOutlineDocumentReport />,
            path: "/reports",
        },
        {
            name: "Profile",
            icon: <FiUser />,
            path: "/profile",
        },
    ];

    return (<aside
        className={`admin-sidebar 
  ${collapsed ? "collapsed" : ""} 
  ${mobileOpen ? "open" : ""}`}
    >
        <div className="sidebar-top">
            {!collapsed && <h2>DSA CRM</h2>}

            <button
                className="toggle-btn"
                onClick={() => {
                    if (window.innerWidth <= 768) {
                        setMobileOpen(!mobileOpen); // mobile open/close
                    } else {
                        setCollapsed(!collapsed); // desktop collapse
                    }
                }}
            >
                <FiMenu />
            </button>
        </div>



        <ul className="sidebar-menu-admin">
            {menuItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    end={item.path === "/CRMAdminDashboard"}
                    className={({ isActive }) =>
                        `menu-item-admin ${isActive ? "active" : ""}`
                    }
                    onClick={() => {
                        if (window.innerWidth <= 768) {
                            setMobileOpen(false);
                        }
                    }}
                >
                    <span className="menu-icon">{item.icon}</span>

                    {!collapsed && (
                        <span className="menu-text">{item.name}</span>
                    )}
                </NavLink>
            ))}
        </ul>

        <div className="sidebar-footer">
            <button className="logout-btn">
                <FiLogOut />
                {!collapsed && <span>Logout</span>}
            </button>
        </div>

    </aside>

    );
};

export default AdminSidebar;