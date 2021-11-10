import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navBar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="issues" to="/issues">
        Issues
      </Link>
    </div>
  );
};

export default Header;
