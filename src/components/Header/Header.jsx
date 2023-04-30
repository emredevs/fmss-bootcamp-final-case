import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// Bringing the user to the login page.
export default function Header({ children }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src="/img/logo.svg" alt="logo" />
        </Link>
      </div>
      {children}
    </div>
  );
}
