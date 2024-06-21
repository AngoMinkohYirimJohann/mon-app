import React from "react";
import "./index.css";
import axios from "axios";

import { Link } from "react-router-dom";

export default function Register() {
  const submit = (e) => {
    e.preventDefault();
    axios.post("localhost:3000/register").then((res) => res.data);
  };

  return (
    <div className="text-center">
      <form onSubmit={(e) => submit(e)} className="form-signin">
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        <label for="inputEmail" className="sr-only">
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

        <label for="inputFirstName" className="sr-only">
          Fisrt Name
        </label>
        <input
          type="text"
          id="inputFirstName"
          className="form-control"
          placeholder="Fisrt Name"
          required
          autofocus
        />
        <label for="inputLastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          placeholder="Last Name"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <Link
          to={"/register"}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Register
        </Link>

        <Link
          to={"/signin"}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </Link>
      </form>
    </div>
  );
}
