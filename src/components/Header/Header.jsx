import React from "react";
import logo from "./logo.png";
import styles from "./Header.module.css";
export default function Header() {
  return <img className={styles.logo} src={logo} alt="logo" />;
}
