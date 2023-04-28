import React from "react";
import logo from "./logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Link to={"/"}>
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
}
