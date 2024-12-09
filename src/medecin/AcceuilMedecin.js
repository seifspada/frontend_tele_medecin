import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import compte from "../assets/logo/compte.png";
import logo from "../assets/logo/logo.jpg";
import "./AcceuilMedecin.css";

const fetchPostsFromAPI = async () => {
  // Remplacez cette URL par celle de votre API
  const response = await fetch("https://api.example.com/posts");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des publications");
  }
  return await response.json();
};

export default function Acceuil() {
  const [role, setRole] = useState("admin"); // Changez cela pour "medecin" ou "patient" selon le besoin
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchPostsFromAPI();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Modifier la publication avec l'ID:", id);
  };

  return (
    <div className="posts-section">
      <nav className="menu-bar">
        <div className="logo">
          <img src={logo} alt="Dawini" />
          <div>Dawini</div>
        </div>
        <ul className="menu">
          <li><Link to="./Acceuil.js">Accueil</Link></li>
          <li><Link to="./Specialites.js">Spécialités</Link></li>
          <li><Link to="./Contact.js">Contact</Link></li>
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

      <h2>Accueil</h2>
      {loading ? (
        <p>Chargement des publications...</p>
      ) : error ? (
        <p>Erreur: {error}</p>
      ) : role === "admin" ? (
        <div>
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
                <button onClick={() => handleEdit(post.id)}>Modifier</button>
                <button onClick={() => handleDelete(post.id)}>Supprimer</button>
              </div>
            ))
          ) : (
            <p>Aucune publication pour le moment.</p>
          )}
        </div>
      ) : role === "medecin" ? (
        <div>
          <h3>Bienvenue Médecin</h3>
          <p>Voici votre espace personnel.</p>
        </div>
      ) : role === "patient" ? (
        <div>
          <h3>Bienvenue Patient</h3>
          <p>Voici votre espace personnel.</p>
        </div>
      ) : null}
    </div>
  );
}