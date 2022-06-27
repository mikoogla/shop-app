import React, { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem/OrderItem";
import Context from "../../context";

export default function Order(props) {
  const context = useContext(Context);
  return (
    <div className={`${props.className} ${styles.main}`}>
      {context.Orders.map((e) => (
        <OrderItem item={e} />
      ))}
      <div className={styles.ConfirmDiv}>
        <Button className={styles.ConfirmButton}>Confirm Order</Button>
      </div>
    </div>
  );
}
