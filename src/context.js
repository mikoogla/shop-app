import React, { createContext, useState, useEffect } from "react";

const Context = createContext({
  HideOrder: true,
  isMobile: null,
  Orders: [],
  Basket: [],
  Currency: "",
  setHideOrder: () => {},
  handleOrderVisibility: () => {},
  addOrder: () => {},
  addToBasket: () => {},
  removeFromBasket: () => {},
  removeOrder: () => {},
});
export function ContextProvider(props) {
  const Currency = "PLN";
  const [HideOrder, setHideOrder] = useState(true);
  const [Orders, setOrders] = useState([]);
  const [Basket, setBasket] = useState([]);
  const [isMobile, setisMobile] = useState(
    window.innerWidth < 750 ? true : false
  );
  const addOrder = (order) => {
    console.log("addOrder");
    setOrders(() => [...Orders, order]);
  };

  const removeOrder = (order) => {
    const i = Orders.map((el) => el.element).indexOf(order);
    Orders.splice(i, 1);
    setOrders(() => [...Orders]);
  };

  const addToBasket = (item) => {
    let tempBasket = Basket;
    const i = tempBasket.map((el) => el.element).indexOf(item);
    if (i === -1) {
      tempBasket.push({ element: item, counter: 1 });
    } else {
      tempBasket[i].counter += 1;
    }
    setBasket(tempBasket);
  };

  const removeFromBasket = (item) => {
    let tempBasket = Basket;
    const i = tempBasket.map((el) => el.element).indexOf(item);
    if (i === -1) {
    } else {
      if (tempBasket[i].counter > 1) tempBasket[i].counter -= 1;
      else if (tempBasket[i].counter <= 1) tempBasket.splice(i, 1);
    }
    setBasket(tempBasket);
  };

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 750 ? setisMobile(true) : setisMobile(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleOrderVisibility = () => {
    setHideOrder((e) => !e);
  };
  return (
    <Context.Provider
      value={{
        HideOrder: HideOrder,
        setHideOrder: setHideOrder,
        handleOrderVisibility: handleOrderVisibility,
        isMobile: isMobile,
        Orders: Orders,
        addOrder: addOrder,
        Basket: Basket,
        addToBasket: addToBasket,
        removeFromBasket: removeFromBasket,
        removeOrder: removeOrder,
        Currency: Currency,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export default Context;
