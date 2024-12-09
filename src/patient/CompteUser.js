import React, { useState } from "react";
import "./compteUser.css";

function CompteUSer() {
  const [userName, setUserName] = useState("John Doe");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [appointments, setAppointments] = useState([
    { date: "2024-12-01", doctor: "Dr. Smith", specialty: "Cardiologie" },
    { date: "2024-12-10", doctor: "Dr. White", specialty: "Neurologie" },
  ]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="compte-container">
      <h1>Paramètres du Compte</h1>

      {/* Photo de profil */}
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* Changer le nom */}
      <div className="name-section">
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={handleNameChange}
          placeholder="Entrez votre nom"
        />
      </div>

      {/* Rendez-vous */}
      <div className="appointments-section">
        <h2>Rendez-vous</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <strong>Date:</strong> {appointment.date} <br />
              <strong>Médecin:</strong> {appointment.doctor} <br />
              <strong>Spécialité:</strong> {appointment.specialty}
            </li>
          ))}
        </ul>
      </div>

      {/* Dossier médical */}
      <div className="medical-records-section">
        <h2>Dossier Médical</h2>
        <p>
          <a href="/dossier-medical" className="link">
            Accéder au dossier médical
          </a>
        </p>
      </div>
    </div>
  );
}

export default CompteUser;
