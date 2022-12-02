import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.navbarLogo} />
      <h1 className={styles.headline}>Travel Memory</h1>
      <Link to="/rules" className={styles.rules}>
        Rules
      </Link>
    </div>
  );
}
export default Navbar;
