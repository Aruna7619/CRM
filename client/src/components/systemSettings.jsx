import React, { useState } from "react";
import "../styles/systemSettings.css";

const SystemSettings = () => {

  const [settings, setSettings] = useState({
    language: "English",
    currency: "INR",
    timezone: "Asia/Kolkata",
    theme: "Light",
  });

  const handleChange = (e) => {

    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("System Settings Saved Successfully!");

  };

  return (

    <div className="settings-card">

      <h3>System Settings</h3>

      <form onSubmit={handleSubmit}>

        <select
          name="language"
          value={settings.language}
          onChange={handleChange}
        >
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
        </select>

        <select
          name="currency"
          value={settings.currency}
          onChange={handleChange}
        >
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <select
          name="timezone"
          value={settings.timezone}
          onChange={handleChange}
        >
          <option>Asia/Kolkata</option>
          <option>UTC</option>
          <option>America/New_York</option>
          <option>Europe/London</option>
        </select>

        <select
          name="theme"
          value={settings.theme}
          onChange={handleChange}
        >
          <option>Light</option>
          <option>Dark</option>
        </select>

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

export default SystemSettings;