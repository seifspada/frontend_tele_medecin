import React, { useState, useEffect } from "react";
import './AdminDashboardConatct.css'; // Assurez-vous d'importer votre CSS

const AdminDashboardConatct = () => {
  const [content, setContent] = useState("");
  const [targetAudience, setTargetAudience] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [messages, setMessages] = useState([]); // État pour stocker les messages

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logique pour publier le contenu
    console.log("Contenu publié:", content, "Pour:", targetAudience);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("content", content);
      formData.append("targetAudience", targetAudience);

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setUploadStatus("Fichier téléchargé avec succès !");
        } else {
          setUploadStatus("Erreur lors du téléchargement du fichier.");
        }
      } catch (error) {
        setUploadStatus("Erreur de connexion.");
      }
    } else {
      setUploadStatus("Aucun fichier sélectionné.");
    }
  };

  // Récupérer les messages envoyés
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages'); // Remplacez par votre endpoint
        if (response.ok) {
          const data = await response.json();
          setMessages(data); // Supposons que les données soient un tableau de messages
        } else {
          console.error("Erreur lors de la récupération des messages");
        }
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Tableau de Bord Administrateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contenu de la publication:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Choisissez le public cible:</label>
          <div>
            <input
              type="checkbox"
              value="medecin"
              onChange={(e) => {
                if (e.target.checked) {
                  setTargetAudience([...targetAudience, e.target.value]);
                } else {
                  setTargetAudience(targetAudience.filter(a => a !== e.target.value));
                }
              }}
            />
            Médecin
          </div>
          <div>
            <input
              type="checkbox"
              value="patient"
              onChange={(e) => {
                if (e.target.checked) {
                  setTargetAudience([...targetAudience, e.target.value]);
                } else {
                  setTargetAudience(targetAudience.filter(a => a !== e.target.value));
                }
              }}
            />
            Patient
          </div>
        </div>
        <div>
          <label>Uploader une photo ou une vidéo:</label>
          <input type="file" onChange={handleFileChange} accept="image/*,video/*" />
        </div>
        <button type="submit">Publier</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}

      <h3>Messages Reçus</h3>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="message">
              <p><strong>De:</strong> {message.sender}</p>
              <p><strong>Message:</strong> {message.text}</p>
              <p><strong>Date:</strong> {new Date(message.date).toLocaleString()}</p>
            </div>
          ))
        )}