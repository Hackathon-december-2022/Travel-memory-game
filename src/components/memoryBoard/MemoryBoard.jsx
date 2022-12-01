import styles from "./memory.module.css";
import cat from "../../assets/memory1.jpeg";
import fox from "../../assets/memory2.jpeg";
import horse from "../../assets/memory3.jpeg";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function MemoryBoard() {
  const cards = [
    { id: 1, img: cat, name: "cat" },
    { id: 2, img: fox, name: "fox" },
    { id: 3, img: horse, name: "horse" },
  ];
  const [memoryCards, setMemoryCards] = useState(cards);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardIndex, setCardIndex] = useState([]);
  const [solvedMemories, setSolvedMemories] = useState([]);
  const [prevIndex, setPrevIndex] = useState(null);
  const [moves, setMoves] = useState(0);
  const [youWon, setYouWon] = useState(false);

  function shuffleCards(array) {
    return array.sort(() => {
      return Math.random() - 0.5;
    });
  }

  useEffect(() => {
    if (solvedMemories.length / 2 === cards.length) {
      setYouWon(true);
      console.log("WOW");
    }
  }, [solvedMemories]);

  useEffect(() => {
    let double = [...cards, ...cards];
    shuffleCards(double);
    setMemoryCards(double);
  }, []);

  useEffect(() => {
    const [firstCard, secondCard] = clickedCards;
    if (clickedCards.length === 2) {
      setMoves((prev) => prev + 1);
      if (firstCard === secondCard) {
        console.log("hurra");
        setSolvedMemories((prev) => [...prev, ...cardIndex]);
        setClickedCards([]);
        setCardIndex([]);
      } else {
        setClickedCards([]);
        setCardIndex([]);
        console.log("nope");
      }
    }
    console.log(`cardIndex ${cardIndex}`);
    console.log(`clickedCards ${clickedCards}`);
    console.log(`solvedMemories ${solvedMemories}`);
  }, [cardIndex]);

  function handleRestart() {
    if (window.confirm("Do you really want to restart?")) {
      console.log("hello");
      setCardIndex([]);
      setClickedCards([]);
      setSolvedMemories([]);
      setPrevIndex(null);
      setMoves(0);
      setYouWon(false);
    }
  }
  return (
    <div className={styles.all}>
      <h1 className={styles.headline}>Travel Memory</h1>
      <div className={styles.points}>
        <div className={styles.moves}>
          Done: {moves} / {cards.length}
        </div>
        <div className={styles.moves}>Moves: {moves}</div>
      </div>
      <div className={styles.container}>
        {memoryCards.map((el, index) => (
          <Card
            key={index}
            index={index}
            name={el.name}
            img={el.img}
            id={el.id}
            setClickedCards={setClickedCards}
            setCardIndex={setCardIndex}
            prevIndex={prevIndex}
            setPrevIndex={setPrevIndex}
            solvedMemories={solvedMemories}
          />
        ))}
      </div>
      <button className={styles.button} onClick={handleRestart}>
        Restart
      </button>
      {youWon && <Confetti></Confetti>}
    </div>
  );
}
export default MemoryBoard;
