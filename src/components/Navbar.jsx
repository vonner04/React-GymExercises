import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <Stack className="navbar-wrapper" direction="row">
      <Link to="/">
        <img className="navbar--logo" src={Logo} alt="logo" />
      </Link>
      <Stack className="navbar" direction="row">
        <Link className="navbar--home" to="/">
          Home
        </Link>
        <a className="navbar--exercises" href="#exercises">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}
