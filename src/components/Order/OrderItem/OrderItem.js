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
      <div>
        <div>
          {props.count}x {props.item.name}
        </div>
        <div>
          {props.item.price.toFixed(2)} {context.Currency}
        </div>
      </div>
      <div>
        <Button onClick={handleRemove}>Remove item</Button>
      </div>
    </Card>
  );
}
