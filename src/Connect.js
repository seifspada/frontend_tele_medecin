import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
export default function Connect() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoi de la requête pour vérifier l'email et le mot de passe
      const response = await axios.post('http://localhost:3000/login', { email, password });

      // Redirection en fonction du rôle
      const role = response.data.role;
      if (role === 'medecin') {
        navigate("./medecin/InterfaceMedicien.js");
      } else if (role === 'patient') {
        navigate("./patient/AcceuilPatient.js");
      } else if (role === 'admin') {
        navigate("./admin/AcceuilAdmin.js");
      }else {
        setMessage('Rôle inconnu');
      }
    } catch (error) {
      setMessage('Email ou mot de passe invalide');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <br />
      <Link to="/register">
        <button type="button">
          Create account
        </button>
      </Link>
    </div>
  );
}
