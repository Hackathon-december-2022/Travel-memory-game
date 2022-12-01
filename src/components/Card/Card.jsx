import styles from "./card.module.css";
import { useState, useEffect } from "react";

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
  const [flip, setFlip] = useState(false);
  function handleClick() {
    setFlip(true);
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

  console.log("solvedMemories", solvedMemories);

  useEffect(() => {
    if (solvedMemories.length) {
      console.log("coucou");
    }
  }, [solvedMemories]);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div
        className={
          flip
            ? `${styles.innerCard} ${styles.isFlipped}`
            : `${styles.innerCard}`
        }
      >
        <div className={`${styles.cardFace} ${styles.cardFaceFront}`}></div>
        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <img className={styles.cardImg} src={img} alt={name} />
        </div>
      </div>
    </div>
  );
}
export default Card;
