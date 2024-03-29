import React, { useContext, useState, useEffect } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./Order.module.css";
import OrderItem from "./OrderItem/OrderItem";
import Context from "../../context";
import OrderPlaced from "./OrderPlaced/OrderPlaced";
import useFetch from "../../hooks/useFetch";
import { DatabaseURL } from "../../private/WorkoutApp-private/Private";

const NoItemsWarning = () => (
  <div className={styles.warning}>Choose at least one item</div>
);
export default function Order(props) {
  const [isOrderPlaced, setisOrderPlaced] = useState(false);
  const [NoItems, setNoItems] = useState(false);
  const context = useContext(Context);
  const { sendRequest } = useFetch();
  useEffect(() => {
    setNoItems(false);
  }, [context.Orders]);

  const Sum = context.Orders.map((e) => e.price).reduce(
    (prev, current) => prev + current,
    0
  );
  const handleOrderPlaced = () => {
    if (context.Orders.length === 0) {
      setNoItems(true);
      return;
    }

    if (!isOrderPlaced) {
      sendRequest({
        url: `${DatabaseURL}/orders.json`,
        method: "POST",
        body: {
          price: Sum,
          items: context.Basket.map((el) => ({
            name: el.element.name,
            count: el.counter,
          })),
        },
      });
    }
    setisOrderPlaced(() => (isOrderPlaced ? false : true));
  };
  return (
    <div className={`${props.className} ${styles.main}`}>
      <div className={styles.content}>
        {context.Basket.map((e) => (
          <OrderItem key={e.element.name} item={e.element} count={e.counter} />
        ))}
        <Card className={styles.summary}>
          {NoItems && <NoItemsWarning />}
          Total: {Sum.toFixed(2)} {context.Currency}
          <Button className={styles.ConfirmButton} onClick={handleOrderPlaced}>
            Confirm Order
          </Button>
          {isOrderPlaced && <OrderPlaced onGoBack={handleOrderPlaced} />}
        </Card>
      </div>
    </div>
  );
}
