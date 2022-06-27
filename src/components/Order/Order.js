import React from "react";
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
    </div>
  );
}
