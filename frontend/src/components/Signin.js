import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/user/signin", formData)
      .then((res) => {
        console.log("Réponse du serveur:", res.data);
        // Traitez la réponse ici, par exemple, affichez un message de confirmation
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      });
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <Link
          to={"/register"}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Register
        </Link>
      </form>
    </div>
  );
}
