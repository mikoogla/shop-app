import React from "react";
import Card from "../../../../UI/Card/Card";
import Button from "../../../../UI/Button/Button";
import styles from "./MenuItem.module.css";

export default function MenuItem(props) {
  return (
    <Card className={styles.main}>
      <div>Name: {props.item.name}</div>
      <div>Description: {props.item.description}</div>
      <div>Price: {props.item.price}</div>
      <div>Ingredients: {props.item.ingredients}</div>
      <div className={styles.orderButton}>
        <Button>Add to order</Button>
      </div>
    </Card>
  );
}
