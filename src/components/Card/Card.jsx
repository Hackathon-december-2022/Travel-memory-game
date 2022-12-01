import styles from "./card.module.css";
import { useState } from "react";

function Card({ img, name, id, setClickedCards }) {
  const [flip, setFlip] = useState(false);
  console.log("rendering");
  function handleClick() {
    setClickedCards(id);

    setFlip(!flip);
  }
  return (
    <div
      className={flip ? `${styles.active} ${styles.card}` : `${styles.card}`}
      onClick={handleClick}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>Hello</div>
        <div className={styles.flipCardBack}>
          <img className={styles.cardImg} src={img} alt={name} />
        </div>
      </div>
    </div>
  );
}
export default Card;
