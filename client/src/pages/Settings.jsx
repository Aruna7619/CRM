import React from "react";
import AdminLayout from "../components/AdminLayout";

import CompanySettings from "../components/CompanySettings";
import ProfileSettings from "../components/ProfileSettings";
import ChangePassword from "../components/ChangePassword";
import NotificationSettings from "../components/NotificationSettings";
import SystemSettings from "../components/SystemSettings";

import "../styles/settings.css";

const Settings = () => {

  return (

    <AdminLayout>

      <div className="settings-page">

        <div className="settings-header">

          <h2>Settings</h2>

        </div>

        <CompanySettings />

        <ProfileSettings />

        <ChangePassword />

        <NotificationSettings />

        <SystemSettings />

      </div>

    </AdminLayout>

  );

};

export default Settings;