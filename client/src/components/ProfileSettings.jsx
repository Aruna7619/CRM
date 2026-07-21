import React, { useState } from "react";
import "../styles/profileSettings.css";

const ProfileSettings = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@gmail.com",
    phone: "9876543210",
    designation: "Administrator",
    photo: "",
  });

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const handlePhoto = (e) => {

    if (e.target.files[0]) {

      setProfile({
        ...profile,
        photo: URL.createObjectURL(e.target.files[0]),
      });

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Profile Updated Successfully!");

    setIsEditing(false);

  };

  return (

    <div className="settings-card">

      <div className="settings-title">

        <h3>Profile Settings</h3>

        {!isEditing && (

          <button
            className="edit-company-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏ Edit
          </button>

        )}

      </div>

      {!isEditing ? (

        <div className="profile-view">

          {profile.photo ? (

            <img
              src={profile.photo}
              alt="Profile"
              className="profile-photo"
            />

          ) : (

            <div className="profile-placeholder">
              👤
            </div>

          )}

          <div className="profile-info">

            <div className="company-row">
              <span>Full Name</span>
              <strong>{profile.fullName}</strong>
            </div>

            <div className="company-row">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>

            <div className="company-row">
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>

            <div className="company-row">
              <span>Designation</span>
              <strong>{profile.designation}</strong>
            </div>

          </div>

        </div>

      ) : (

        <form onSubmit={handleSubmit}>

          <div className="profile-photo-section">

            {profile.photo ? (

              <img
                src={profile.photo}
                alt="Profile"
                className="profile-photo"
              />

            ) : (

              <div className="profile-placeholder">
                👤
              </div>

            )}

            <label className="upload-photo-btn">

              📷 Change Photo

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhoto}
              />

            </label>

          </div>

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
          />

          <div className="settings-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-company-btn"
            >
              Save Changes
            </button>

          </div>

        </form>

      )}

    </div>

  );

};

export default ProfileSettings;