import React from 'react';
import "./createMedicien.css";

export default function createMedicien() {

 

  return (
    <div>
      <h2>Inscription Médecin</h2>
      <form >
        <label>
          Nom:
          <input
            type="text"
          
          />
        </label>
        <label>
          Prénom:
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
        <label>
          Êtes-vous médecin ?
          <input
            type="checkbox"
            
          />
        </label>
        
            <label>
              diplome ID:
              <input
                type="text"
                
              />
            </label>
            <label>
              Spécialisation:
              <input
                type="text"
              />
            </label>
          
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}


