import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem/OrderItem";
import Context from "../../context";
export default function Order(props) {
  const context = useContext(Context);
  const Sum = context.Orders.map((e) => e.price).reduce(
    (prev, current) => prev + current,
    0
  );
  return (
    <div className={`${props.className} ${styles.main}`}>
      <div className={styles.content}>
        {context.Basket.map((e) => (
          <OrderItem item={e.element} count={e.counter} />
        ))}
        <Card className={styles.summary}>
          Total: {Sum}
          <Button className={styles.ConfirmButton}>Confirm Order</Button>
        </Card>
      </div>
    </div>
  );
}
