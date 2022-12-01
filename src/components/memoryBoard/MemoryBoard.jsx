import styles from "./memory.module.css";
import cat from "../../assets/memory1.jpeg";
import fox from "../../assets/memory2.jpeg";
import horse from "../../assets/memory3.jpeg";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function MemoryBoard() {
  const cards = [
    { id: 1, img: cat, name: "cat" },
    { id: 2, img: fox, name: "fox" },
    { id: 3, img: horse, name: "horse" },
  ];
  const [memoryCards, setMemoryCards] = useState(cards);
  const [clickedCards, setClickedCards] = useState(null);
  const [cardIndex, setCardIndex] = useState([]);

  function shuffleCards(array) {
    return array.sort(() => {
      return Math.random() - 0.5;
    });
  }

  useEffect(() => {
    let double = [...cards, ...cards];
    shuffleCards(double);
    setMemoryCards(double);
  }, []);

  useEffect(() => {
    console.log(clickedCards);
  }, [clickedCards]);

  return (
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
          cardIndex={cardIndex}
        />
      ))}
    </div>
  );
}
export default MemoryBoard;
