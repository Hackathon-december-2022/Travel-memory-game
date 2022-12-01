import { Link } from "react-router-dom";
import styles from "./logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} className={styles.logoImage} alt="logo" />
    </Link>
  );
}

export default Logo;
