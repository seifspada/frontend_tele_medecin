import React from "react";
import { Link } from "react-router-dom";
import compte from "../assets/logo/compte.png";
import logo from "../assets/logo/logo.jpg";
import "./AcceuilPatient.css";

export default function AcceuilAdmin() {
  // Simule des publications déjà créées par l'administrateur
  const posts = [
    {
      id: 1,
      status: "Bienvenue sur notre plateforme ! 🌟",
      file: "https://via.placeholder.com/600x400", // URL de l'image
      type: "image",
    },
    {
      id: 2,
      status: "Rappel : Nos services sont disponibles 24h/24. 🕒",
      file: "https://via.placeholder.com/600x400", // URL d'une vidéo
      type: "image",
    },
    {
      id: 3,
      status: "Découvrez nos nouvelles fonctionnalités en vidéo !",
      file: "https://www.w3schools.com/html/mov_bbb.mp4", // Exemple de vidéo
      type: "video",
    },
  ];

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
      <Link to="./AjoutePoste">
      <button type="submit">Ajouter poste</button>
      </Link>
      <h2>Accueil</h2>
      <h3>Dernières publications</h3>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.status}</p>
            {post.type === "image" ? (
              <img src={post.file} alt="Publication" className="post-media" />
            ) : (
              <video controls className="post-media">
                <source src={post.file} type="video/mp4" />
              </video>
            )}
          </div>
        ))
      ) : (
        <p>Aucune publication pour le moment.</p>
      )}
    </div>
  );
}
