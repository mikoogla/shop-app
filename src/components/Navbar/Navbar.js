import React from "react";
import ShoppingCart from "./Cart/ShoppingCart";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.main}>
      Navbar
      <ShoppingCart />
    </div>
  );
}
