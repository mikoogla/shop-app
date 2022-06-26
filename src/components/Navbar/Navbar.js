import React from "react";
import Logo from "../../UI/Logo/Logo";
import ShoppingCart from "./Cart/ShoppingCart";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Logo size="25px" />
        <ShoppingCart />
      </div>
    </div>
  );
}
