import React from "react";
import logo from "./logo.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Form from "../From";
// logo ve form sayfaların getirilmesi
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <Form />
    </div>
  );
}
