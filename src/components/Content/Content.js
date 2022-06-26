import React from "react";
import styles from "./Content.module.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

export default function Content() {
  return (
    <div className={styles.main}>
      <Header />
      <Menu />
    </div>
  );
}
