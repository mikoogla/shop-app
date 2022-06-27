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
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        {context.isMobile ? context.HideOrder && <Content /> : <Content />}
        <SideBar />
        <Order className={`${context.HideOrder && styles.HideOrderStyle}`} />
      </div>
    </div>
  );
}

export default App;
