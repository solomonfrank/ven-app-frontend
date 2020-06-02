import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <nav class="navbar navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          VenApp
        </Link>
      </nav>
    </header>
  );
};

export default Header;
