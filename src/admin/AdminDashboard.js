import React, { useState } from "react";
import "./AdminDashboard.css";
const AdminDashboard = () => {
  const [content, setContent] = useState("");
  const [targetAudience, setTargetAudience] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logique pour publier le contenu
    console.log("Contenu publié:", content, "Pour:", targetAudience);

    // Vérifiez si un fichier a été sélectionné
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("content", content);
      formData.append("targetAudience", targetAudience);

      try {
        const response = await fetch('/upload', { // Remplacez '/upload' par votre endpoint
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
    </div>
  );
};

export default AdminDashboard;