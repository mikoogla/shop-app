import React, { useContext } from "react";
import styles from "./ShoppingCart.module.css";
import Button from "../../../UI/Button/Button";
import Context from "../../../context";
export default function ShoppingCart() {
  const context = useContext(Context);
  return (
    <div className={styles.main}>
      <Button onClick={context.handleOrderVisibility}>
        {context.HideOrder ? "Open Basket" : "Close Basket"}
      </Button>
    </div>
  );
}
