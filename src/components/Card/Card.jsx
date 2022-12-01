import styles from "./card.module.css";
import { useState } from "react";

function Card({
  img,
  name,
  id,
  setClickedCards,
  index,
  setCardIndex,
  prevIndex,
  setPrevIndex,
  solvedMemories,
}) {
  function handleClick() {
    if (prevIndex !== index) {
      if (!solvedMemories.includes(index)) {
        setClickedCards((prev) => [...prev, id]);
        setCardIndex((prev) => [...prev, index]);
        setPrevIndex(index);
      } else {
        console.log("contained!");
      }
    }
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
