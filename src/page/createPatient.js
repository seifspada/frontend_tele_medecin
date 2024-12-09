import React from 'react';
import "./createPatient.css";

export default function createPatient() {
  
  return (
    <div>
      <h2>Formulaire de Patient</h2>
      <form >
        <label>
          Nom:
          <input 
            type="text" 
            
          />
        </label>
        <br />
        
        <label>
          Prenom:
          <input 
            type="text" 
             
            
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
         
            
          />
        </label>
        <br />
        <label>
          Téléphone:
          <input 
            type="text" 
            
          />
        </label>
        <br />
        <button type="submit">Créer Patient</button>
      </form>
    </div>
  );
}

