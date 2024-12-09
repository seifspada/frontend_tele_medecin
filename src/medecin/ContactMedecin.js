import React from "react";
import { Link } from "react-router-dom";
import compte from "../assets/logo/compte.png";
import logo from '../assets/logo/logo.jpg';
import "./ContactMedecin.css";

export default function ContactMedecien() {
  return (
    <div className="App">
      {/* Barre de navigation */}
      <nav className="menu-bar">
        <div className="logo">
          <img src={logo} alt="Dawini" />
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
        <a className="compte" href="/compte">
          <img src={compte} alt="Compte utilisateur" />
        </a>
      </nav>
      <br />
      {/* Contenu principal */}
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p>
          Nous sommes à votre disposition pour toute question ou assistance.
        </p>
        <div className="contact-info">
          <div className="contact-card">
            <h3>Téléphone</h3>
            <p>+216 71 123 456</p>
            <p>+216 71 123 457</p>
            <p>+216 71 123 458</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>contact@dawini.tn</p>
          </div>
        </div>
        <form className="contact-form">
          <h3>Envoyez-nous un message</h3>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
