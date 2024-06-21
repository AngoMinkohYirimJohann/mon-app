import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/register", formData)
      .then((res) => {
        console.log("Réponse du serveur:", res.data);
        // Traitez la réponse ici, par exemple, affichez un message de confirmation
      })
      .catch((error) => {
        console.error("Erreur lors de l'inscription:", error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      });
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="form-signin">
        {/* Vos champs de formulaire */}
        <input
          type="email"
          id="inputEmail"
          name="email"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          id="inputFirstName"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          id="inputLastName"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="password"
          id="inputPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        {/* Bouton de soumission */}
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>

        {/* Lien vers la page de connexion */}
        <Link to="/" className="btn btn-lg btn-primary btn-block">
          Sign in
        </Link>
      </form>
    </div>
  );
}
