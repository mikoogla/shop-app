import React, { useContext } from "react";
import styles from "./ShoppingCart.module.css";
import Button from "../../../UI/Button/Button";
import Context from "../../../context";
export default function ShoppingCart() {
  const context = useContext(Context);
  return (
    <div>
      <Button onClick={context.handleOrderVisibility}>Shopping cart</Button>
    </div>
  );
}
