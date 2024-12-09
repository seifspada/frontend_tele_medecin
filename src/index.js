import React from 'react';
import ReactDOM from 'react-dom/client'; // Assurez-vous d'utiliser react-dom/client
import App from './App';
import './index.css';

const rootElement = document.getElementById('root'); // Correspond à l'id du div dans index.html

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Impossible de trouver l'élément avec l'id 'root'.");
}
