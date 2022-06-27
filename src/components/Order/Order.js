import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem/OrderItem";

export default function Order(props) {
  return (
    <div className={`${props.className} ${styles.main}`}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <div className={styles.ConfirmDiv}>
        <Button className={styles.ConfirmButton}>Confirm Order</Button>
      </div>
    </div>
  );
}
