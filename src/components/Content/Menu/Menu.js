import React from "react";
import MenuItem from "./Menu-Item/MenuItem";
import { menu } from "../../../DB/Menu";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <div className={styles.main}>
      {menu.map((item) => (
        <MenuItem item={item} />
      ))}
      {menu.map((item) => (
        <MenuItem item={item} />
      ))}
      {menu.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}
