import groupfoto from "../../assets/aboutus.png";
import styles from "./aboutus.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>About Us</h2>
      <img src={groupfoto} alt="group-foto" className={styles.groupImg} />
    </div>
  );
}
export default AboutUs;
