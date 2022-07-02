import React from "react";
import styles from "./Logo.module.css";
import logo from "../../Assets/Images/Logo.png";
export default function Logo(props) {
  return (
    <img
      className={styles.main}
      src={logo}
      alt="logo"
      width={props.size}
      height={props.size}
    />
  );
}
