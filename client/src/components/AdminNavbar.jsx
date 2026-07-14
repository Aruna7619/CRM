import React from "react";
// import { FiSearch, FiBell } from "react-icons/fi";
import "../styles/adminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">

      {/* LEFT: PAGE TITLE */}
      <div className="nav-left">
        <h2>Logo</h2>
      </div>

      {/* CENTER: SEARCH */}
      <div className="nav-center">
        {/* <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search leads, agents..." />
        </div> */}
      </div>

      {/* RIGHT: ICONS + PROFILE */}
      <div className="nav-right">

        {/* <div className="icon-box-admin">
          <FiBell />
          <span className="badge-admin">1</span>
        </div> */}

        <div className="profile-box">
          <div className="avatar">A</div>
          <div className="profile-info">
            <p className="name">Admin</p>
            <p className="role">Super Admin</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminNavbar;