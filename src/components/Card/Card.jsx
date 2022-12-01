import styles from "./card.module.css";

function Card({
  img,
  name,
  id,
  setClickedCards,
  index,
  setCardIndex,
  prevIndex,
  setPrevIndex,
}) {
  function handleClick() {
    if (prevIndex !== index) {
      setClickedCards((prev) => [...prev, id]);
      setCardIndex((prev) => [...prev, index]);
      setPrevIndex(index);
    }
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.cardImg} src={img} alt={name} />
    </div>
  );
}
export default Card;
