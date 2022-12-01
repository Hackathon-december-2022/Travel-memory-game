import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import githublogo from "../../assets/github-logo.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/about-us" className={styles.aboutUs}>
        {" "}
        About us
      </Link>

      <a href="https://github.com/Hackathon-december-2022/Travel-memory-game">
        <img
          src={githublogo}
          alt="github-logo"
          className={styles.projectLink}
        />
      </a>
    </div>
  );
}

export default Footer;
