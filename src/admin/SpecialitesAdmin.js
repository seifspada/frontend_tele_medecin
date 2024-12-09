import React from "react";
import { Link } from "react-router-dom";
import compte from "../assets/logo/compte.png";
import logo from "../assets/logo/logo.jpg";
import "./InterfaceAdmin.css";

export default function InterfaceAdmin() {
  // Simule des publications déjà créées par l'administrateur
  

  return (
    <div className="posts-section">
         <nav className="menu-bar">
        <div className="logo">
          <img src={logo} alt="Dawini" />
          <div>Dawini</div>
          
        </div>
        
        <ul className="menu">
          <li><Link to="./AcceuilPatient.js">Accueil</Link></li>
          <li><Link to="./SpecialitesPatient.js">Spécialités</Link></li>
          <li><Link to="./ContactPatient.js">Contact</Link></li>
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
      
      <h2>Welcome Admin</h2>
      
    </div>
  );
}
