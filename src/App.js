import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
import Order from "./components/Order/Order";
function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Content />
        <SideBar />
        <Order />
      </div>
    </div>
  );
}

export default App;
