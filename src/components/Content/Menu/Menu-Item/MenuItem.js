import React, { useContext } from "react";
import Card from "../../../../UI/Card/Card";
import Button from "../../../../UI/Button/Button";
import styles from "./MenuItem.module.css";
import Context from "../../../../context";

export default function MenuItem(props) {
  const context = useContext(Context);
  function ok() {
    context.addOrder(props.item);
    context.addToBasket(props.item);
  }
  return (
    <Card className={styles.main}>
      <div>Name: {props.item.name}</div>
      <div>Description: {props.item.description}</div>
      <div>Price: {props.item.price}</div>
      <div>Ingredients: {props.item.ingredients}</div>
      <div className={styles.orderButton}>
        <Button onClick={ok}>Add to order</Button>
      </div>
    </Card>
  );
}
