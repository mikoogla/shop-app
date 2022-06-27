import React from "react";
import Card from "../../../UI/Card/Card";
import styles from "./OrderItem.module.css";
export default function OrderItem(props) {
  return (
    <Card className={styles.main}>
      <div>Name: {props.item.name}</div>
      <div>Price: {props.item.price}</div>
    </Card>
  );
}
