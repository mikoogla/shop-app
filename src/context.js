import React, { createContext, useState, useEffect } from "react";

const Context = createContext({
  HideOrder: true,
  isMobile: null,
  Orders: [],
  setHideOrder: () => {},
  handleOrderVisibility: () => {},
  addOrder: () => {},
});

export function ContextProvider(props) {
  const [HideOrder, setHideOrder] = useState(true);
  const [Orders, setOrders] = useState([]);
  const [isMobile, setisMobile] = useState(
    window.innerWidth < 750 ? true : false
  );
  const addOrder = (order) => {
    setOrders(() => [...Orders, order]);
  };
  useEffect(() => {
    function handleResize() {
      window.innerWidth < 750 ? setisMobile(true) : setisMobile(false);
      console.log("is mobile: " + isMobile);
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export default Context;
