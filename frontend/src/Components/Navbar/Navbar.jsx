import React from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { FcTodoList } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    {
      setClicked(!clicked);
    }
  };

  return (
    <nav className="NavbarItems">
    
        <FcTodoList className="navbar-logo" size="50px" />
      

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link className="nav-links" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
