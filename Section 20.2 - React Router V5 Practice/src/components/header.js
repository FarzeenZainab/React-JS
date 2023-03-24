import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName={`${styles.active}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={`${styles.active}`}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
