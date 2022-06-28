import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import Context from "../../context";
export default function SideBar() {
  const context = useContext(Context);
  return (
    <div onClick={context.handleOrderVisibility} className={styles.main}>
      Gravity Burgers - serving since 2020
    </div>
  );
}
