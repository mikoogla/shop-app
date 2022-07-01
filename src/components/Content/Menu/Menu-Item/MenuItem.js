import React, { useContext } from "react";
import Card from "../../../../UI/Card/Card";
import Button from "../../../../UI/Button/Button";
import styles from "./MenuItem.module.css";
import Context from "../../../../context";
import { burgerPhoto } from "../../../../DB/Images";

export default function MenuItem(props) {
  const context = useContext(Context);
  function ok() {
    context.addOrder(props.item);
    context.addToBasket(props.item);
  }

  const Text = () => (
    <div className={styles.text}>
      <div>
        <h2>{props.item.name}</h2>
      </div>
      <div>
        Price: {props.item.price.toFixed(2)} {context.Currency}
      </div>
      <div>{props.item.description}</div>
      <div>Ingredients: {props.item.ingredients}</div>
    </div>
  );

  const AddOrderButton = () => (
    <div className={styles.orderButton}>
      <Button onClick={ok}>Add to order</Button>
    </div>
  );

  const Image = () => (
    <img
      className={styles.image}
      alt={props.item.name}
      src={burgerPhoto}
      width="200"
    />
  );
  return (
    <Card className={styles.main}>
      <Image />
      <div className={styles.content}>
        <Text />
        <AddOrderButton />
      </div>
    </Card>
  );
}
