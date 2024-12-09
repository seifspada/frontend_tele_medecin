import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import compte from "../assets/logo/compte.png";
import logo from "../assets/logo/logo.jpg";

const Login = () => {
  const [showAppointments, setShowAppointments] = useState(false);

  // Simulated list of appointments
  const appointments = [
    { id: 1, date: "2024-12-05", time: "10:00 AM", patient: "John Doe" },
    { id: 2, date: "2024-12-06", time: "02:00 PM", patient: "Jane Smith" },
    { id: 3, date: "2024-12-07", time: "11:30 AM", patient: "Alice Brown" },
  ];


  return (
    <div className="App">
      {/* Barre de navigation */}
      <nav className="menu-bar">
        <div className="logo">
          <img src={logo} alt="Dawini" />
          <div>Dawini</div>
        </div>
        <ul className="menu">
          <li><Link to="/acceuil">Accueil</Link></li>
          <li><Link to="/specialities">Spécialités</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <button>Rechercher</button>
        </div>
        <a className="compte" href="/compte">
          <img src={compte} alt="Compte utilisateur" />
        </a>
      </nav>
      <br />

      {/* Contenu principal */}
      <div className="content">
        <h1>Bienvenue à notre plateforme de Télé-Médecine</h1>
        <p>Explorez nos spécialités et nos services pour répondre à vos besoins de santé.</p>
      </div>

      

      {/* Rendez-vous */}
      {showAppointments && (
        <div className="appointments-container">
          <h3>Rendez-vous</h3>
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id}>
                <strong>Date:</strong> {appointment.date} - <strong>Heure:</strong>{" "}
                {appointment.time} - <strong>Patient:</strong> {appointment.patient}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
