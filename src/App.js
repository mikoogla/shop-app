import { useContext } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import Order from "./components/Order/Order";
import Context from "./context";

function App() {
  const context = useContext(Context);

  const Content_Styles_Logic = `${styles.menu} ${
    context.isMobile && !context.HideOrder && styles.HideOrderStyle
  }`;

  const Order_Styles_Logic = ` ${styles.menu} ${
    context.HideOrder && styles.HideOrderStyle
  }`;

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Content className={Content_Styles_Logic} />
        <SideBar />
        <Order className={Order_Styles_Logic} />
      </div>
    </div>
  );
}

export default App;
