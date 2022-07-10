import React, { useState, useEffect, useCallback } from "react";
import MenuItem from "./Menu-Item/MenuItem";
import { menu } from "../../../DB/Menu";
import styles from "./Menu.module.css";
import { DatabaseURL } from "../../../private/WorkoutApp-private/Private";
import useFetch from "../../../hooks/useFetch";
export default function Menu() {
  const { isLoading, error, sendRequest } = useFetch();
  const [menuItems, setMenuItems] = useState([]);

  const loadMenu = async (obj) => {
    const loadedTasks = [];

    for (const key in obj) {
      loadedTasks.push({
        id: key,
        name: obj[key].name,
        description: obj[key].description,
        price: +obj[key].price,
        ingredients: obj[key].ingredients,
      });
    }

    setMenuItems(loadedTasks);
  };

  const getMenu = useCallback(async () => {
    sendRequest({ url: `${DatabaseURL}/menu.json` }, loadMenu);
  });

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return (
    <div className={styles.main}>
      {menuItems.map((item) => (
        <MenuItem item={item} key={Math.random()} />
      ))}
    </div>
  );
}
