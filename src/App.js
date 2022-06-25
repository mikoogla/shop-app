import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Content />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
