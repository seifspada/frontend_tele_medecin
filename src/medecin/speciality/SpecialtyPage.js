import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import compte from "../../assets/logo/compte.png";
import logo from "../../assets/logo/logo.jpg";
import "./profileMedicien.css"; // Assurez-vous que ce fichier CSS est bien dans votre dossier

function SpecialtyPage({ specialtyName, fetchSpecialties }) {
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    // Appeler une fonction pour récupérer les spécialités ou utiliser des données passées en prop
    const fetchData = async () => {
      try {
        const data = await fetchSpecialties(specialtyName);
        setSpecialties(data);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };

    fetchData();
  }, [specialtyName, fetchSpecialties]);

  return (
    <div>
      {/* Barre de menu */}
      <nav className="menu-bar">
        <div className="logo">
          <img src={logo} alt="Dawini" />
          <div>Dawini</div>
        </div>
        <ul className="menu">
      {role === 'patient' && (
        <>
          <li><Link to="/InterfacePatient">Accueil Patient</Link></li>
          <li><Link to="/SpecialitiesPatient">Spécialités Patient</Link></li>
          <li><Link to="/ContactPatient">Contact Patient</Link></li>
        </>
      )}
      {role === 'medecin' && (
        <>
          <li><Link to="/InterfaceMedecin">Accueil Médecin</Link></li>
          <li><Link to="/SpecialitiesMedecin">Spécialités Médecin</Link></li>
          <li><Link to="/ContactMedecin">Contact Médecin</Link></li>
        </>
      )}
      {role === 'admin' && (
        <>
          <li><Link to="/InterfaceAdmin">Accueil Admin</Link></li>
          <li><Link to="/SpecialitiesAdmin">Spécialités Admin</Link></li>
          <li><Link to="/ContactAdmin">Contact Admin</Link></li>
        </>
      )}
    </ul>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <button>Rechercher</button>
        </div>
        <a className="compte" href="./compteUser.js">
          <img src={compte} alt="iconCompte" />
        </a>
      </nav>

      <br />
      <div className="specialties-container">
        <h2>{specialtyName}</h2>
        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="specialty-card">
              <img src={specialty.image} alt={specialty.nameDoctor} />
              <Link to={`/${specialty.nameDoctor}`}>
                <h3>Dr. {specialty.nameDoctor}</h3>
              </Link>
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialtyPage;
