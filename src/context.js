import React, { createContext, useState, useEffect } from "react";

const Context = createContext({
  HideOrder: true,
  isMobile: null,
  setHideOrder: () => {},
  handleOrderVisibility: () => {},
});

export function ContextProvider(props) {
  const [HideOrder, setHideOrder] = useState(true);
  const [isMobile, setisMobile] = useState(
    window.innerWidth < 750 ? true : false
  );
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export default Context;
