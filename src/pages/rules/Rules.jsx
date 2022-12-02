import styles from "./rules.module.css";

function Rules() {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>Travel-Memory-Game</h2>
      <p className={styles.introduction}>
        You dont know where to spend your next Holidays at? No Problem, we will
        helpt you making a Decision.
        <br /> With our Travel Memory Game we provide you with some beautiful
        Places to visit around the World and you will also have fun to explore
        them over a round of Memory.
      </p>
      <h2 className={styles.rulesHeadline}> Here are the Rules:</h2>
      <ul className={styles.list}>
        <li className={styles.listItems}>
          The objective is to collect the most pairs of cards.
        </li>
        <li className={styles.listItems}>
          On each turn, a player turns over any two cards and keeps them if the
          cards match.
        </li>
        <li className={styles.listItems}>
          If they successfully match a pair they get a point.
        </li>
        <li className={styles.listItems}>
          When a player turns over two cards that do not match, the cards turn
          face down again (in the same position) and it becomes the next
          player’s turn.
        </li>
        <li className={styles.listItems}>
          The player with the most pairs wins.
        </li>
      </ul>
    </div>
  );
}
export default Rules;
