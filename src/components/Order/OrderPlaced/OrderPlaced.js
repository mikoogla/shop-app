import React from "react";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import styles from "./OrderPlaced.module.css";

export default function OrderPlaced(props) {
  function GoBack() {
    props.onGoBack();
  }
  return (
    <div onClick={GoBack} className={styles.bg}>
      <Card className={styles.content}>
        <div>The order has been placed successfully</div>
        <Button onClick={GoBack}>Go back</Button>
      </Card>
    </div>
  );
}
