import React, { useContext, useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem/OrderItem";
import Context from "../../context";
export default function Order(props) {
  const context = useContext(Context);

  return (
    <div className={`${props.className} ${styles.main}`}>
      <div className={styles.content}>
        {context.Basket.map((e) => (
          <OrderItem item={e.element} count={e.counter} />
        ))}
        <div className={styles.ConfirmDiv}>
          <Button className={styles.ConfirmButton}>Confirm Order</Button>
        </div>
      </div>
    </div>
  );
}
