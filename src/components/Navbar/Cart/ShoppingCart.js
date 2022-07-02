import React, { useContext, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import Button from "../../../UI/Button/Button";
import Context from "../../../context";
import Badge from "@mui/material/Badge";
export default function ShoppingCart() {
  const context = useContext(Context);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!animate);
    return () => {
      setAnimate(!animate);
    };
  }, [context.Orders]);

  return (
    <div
      className={`${styles.main} ${
        animate ? styles.animation : styles.animation2
      }`}
    >
      <Button onClick={context.handleOrderVisibility}>
        {context.HideOrder ? "Open Cart" : "Close Cart"}
      </Button>
      <Badge
        className={styles.badge}
        badgeContent={context.Orders.length}
        color="primary"
      />
    </div>
  );
}
