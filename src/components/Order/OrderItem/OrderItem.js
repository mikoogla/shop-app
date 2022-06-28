import React, { useContext } from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import styles from "./OrderItem.module.css";
import Context from "../../../context";

export default function OrderItem(props) {
  const context = useContext(Context);

  const handleRemove = () => {
    context.removeOrder(props.item);
    context.removeFromBasket(props.item);
  };
  return (
    <Card className={styles.main}>
      <div>Name: {props.item.name}</div>
      <div>Price: {props.item.price}</div>
      <div>Count: {props.count}</div>
      <Button onClick={handleRemove}>Remove item</Button>
    </Card>
  );
}
