import styles from "./card.module.css";

function Card({ img, name, id, setClickedCards }) {
  function handleClick() {
    setClickedCards(id);
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <img className={styles.cardImg} src={img} alt={name} />
    </div>
  );
}
export default Card;
