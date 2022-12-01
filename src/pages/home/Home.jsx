import MemoryBoard from "../../components/memoryBoard/MemoryBoard";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <MemoryBoard />
    </div>
  );
}
export default Home;
