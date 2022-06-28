import React from "react";
import styles from "./Content.module.css";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

export default function Content(props) {
  return (
    <div className={`${styles.main} ${props.className}`}>
      <div className={styles.content}>
        <Header />
        <Menu />
      </div>
    </div>
  );
}
