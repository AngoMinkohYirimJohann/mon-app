import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="text-center">
      <form className="form-signin">
        <img
          className="mb-4"
          src="https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180902609/109317497-ic%C3%B4ne-de-vecteur-de-formulaire-de-commande-isol%C3%A9-sur-fond-transparent-concept-de-logo-de-formulaire.jpg"
          alt=""
          width="72"
          height="72"
        />
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
          autofocus
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
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Link
          to={"/"}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </Link>
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
