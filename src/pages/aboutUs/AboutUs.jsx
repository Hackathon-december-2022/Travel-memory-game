import groupfoto from "../../assets/aboutus.png";
import styles from "./aboutus.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <img src={groupfoto} alt="group-foto" className={styles.groupImg} />
    </div>
  );
}
export default AboutUs;
