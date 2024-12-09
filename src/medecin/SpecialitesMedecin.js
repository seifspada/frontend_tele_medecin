import React from "react";
import { Link } from "react-router-dom";
import Cardiologie from "../assets/logo/Cardiologie.jpg";
import Dermatologie from "../assets/logo/Dermatologie.jpg";
import Neurologie from "../assets/logo/Neurologie.jpg";
import Pediatrie from "../assets/logo/Pediatrie.jpg";
import Psychiatrie from "../assets/logo/Psychiatrie.jpg";
import compte from "../assets/logo/compte.png";
import logo from "../assets/logo/logo.jpg";
import "./SpecialitesMedecin.css"; // Assurez-vous que ce fichier CSS est bien dans votre dossier

const specialties = [
  { id: 1, name: "Cardiologie", description: "Spécialistes du cœur et des maladies cardiovasculaires.", image: Cardiologie },
  { id: 2, name: "Neurologie", description: "Experts en maladies du cerveau et du système nerveux.", image: Neurologie },
  { id: 3, name: "Pediatrie", description: "Médecins pour enfants et adolescents.", image: Pediatrie },
  { id: 4, name: "Dermatologie", description: "Traitements pour les maladies de la peau.", image: Dermatologie },
  { id: 5, name: "Psychiatrie", description: "Soins pour la santé mentale.", image: Psychiatrie },
];


function SpecialtiesMedecin() {
  return (
    <div>
       {/* Barre de menu */}
       <nav className="menu-bar">
        
        <div className="logo">
        <img  src={logo} alt="Dawini" />
        <div>Dawini</div>
        </div>
        <ul className="menu">
        <li><Link to="./AcceuilMedecin.js">Accueil</Link></li>
          <li><Link to="./SpecialitesMedecin.js">Spécialités</Link></li>
          <li><Link to="./ContactMedecin.js">Contact</Link></li>
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
        <h2>Nos Spécialités</h2>
        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="specialty-card">
              <Link to={`/${specialty.name}`}>
                <img src={specialty.image} alt={specialty.name} />
                <h3>{specialty.name}</h3>
              </Link>
             
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default SpecialtiesMedecin;
