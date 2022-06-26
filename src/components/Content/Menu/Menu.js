import React from "react";
import MenuItem from "./Menu-Item/MenuItem";
import { menu } from "../../../DB/Menu";

export default function Menu() {
  return (
    <div>
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
