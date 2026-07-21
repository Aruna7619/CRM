import React, { useState } from "react";
import "../styles/notificationSettings.css";

const NotificationSettings = () => {

  const [settings, setSettings] = useState({
    leadCreated: true,
    leadAssigned: true,
    followUpReminder: true,
    taskReminder: true,
    calendarReminder: true,
    quotationApproved: false,
    invoiceGenerated: true,
    paymentReceived: true,
  });

  const handleChange = (e) => {

    setSettings({
      ...settings,
      [e.target.name]: e.target.checked,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Notification Settings Saved Successfully!");

  };

  return (

    <div className="settings-card">

      <h3>Notification Settings</h3>

      <form onSubmit={handleSubmit}>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="leadCreated"
            checked={settings.leadCreated}
            onChange={handleChange}
          />
          New Lead Created
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="leadAssigned"
            checked={settings.leadAssigned}
            onChange={handleChange}
          />
          Lead Assigned
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="followUpReminder"
            checked={settings.followUpReminder}
            onChange={handleChange}
          />
          Follow-up Reminder
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="taskReminder"
            checked={settings.taskReminder}
            onChange={handleChange}
          />
          Task Due Reminder
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="calendarReminder"
            checked={settings.calendarReminder}
            onChange={handleChange}
          />
          Calendar Event Reminder
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="quotationApproved"
            checked={settings.quotationApproved}
            onChange={handleChange}
          />
          Quotation Approved
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="invoiceGenerated"
            checked={settings.invoiceGenerated}
            onChange={handleChange}
          />
          Invoice Generated
        </label>

        <label className="toggle-item">
          <input
            type="checkbox"
            name="paymentReceived"
            checked={settings.paymentReceived}
            onChange={handleChange}
          />
          Payment Received
        </label>

        <button
          type="submit"
          className="save-company-btn"
        >
          Save Settings
        </button>

      </form>

    </div>

  );

};

export default NotificationSettings;