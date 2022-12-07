import styles from "./memory.module.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import CardsData from "./CardsData";
import InfoModal from "../InfoModal/InfoModal";

function MemoryBoard() {
  const [memoryCards, setMemoryCards] = useState(CardsData);
  const [clickedCards, setClickedCards] = useState([]);
  const [cardIndex, setCardIndex] = useState([]);
  const [solvedMemories, setSolvedMemories] = useState([]);
  const [prevIndex, setPrevIndex] = useState(null);
  const [moves, setMoves] = useState(0);
  const [youWon, setYouWon] = useState(false);
  const [restart, setRestart] = useState(false);
  const [flippedCards, setFlippedCards] = useState(
    Array(CardsData.length * 2).fill(false)
  );
  const [memorySize, setMemorySize] = useState(12);
  const [layover, setLayover] = useState(false);

  function shuffleCards(array) {
    return array.sort(() => {
      return Math.random() - 0.5;
    });
  }

  useEffect(() => {
    if (solvedMemories.length / 2 === parseInt(memorySize)) {
      setYouWon(true);
    }
    // eslint-disable-next-line
  }, [solvedMemories]);

  useEffect(() => {
    if (!memorySize) {
      let double = [...CardsData, ...CardsData];
      shuffleCards(double);
      setMemoryCards(double);
    } else {
      let adjustedMemory = [...CardsData].splice(0, memorySize);
      let double = [...adjustedMemory, ...adjustedMemory];
      shuffleCards(double);
      setMemoryCards(double);
    }
    // eslint-disable-next-line
  }, [restart, memorySize]);

  useEffect(() => {
    const [firstCard, secondCard] = clickedCards;
    if (clickedCards.length === 2) {
      setMoves((prev) => prev + 1);
      setLayover(true);
      // eslint-disable-next-line
      const waitToFlip = setTimeout(() => {
        if (firstCard === secondCard) {
          setSolvedMemories((prev) => [...prev, ...cardIndex]);
          setClickedCards([]);
          setCardIndex([]);
        } else {
          setClickedCards([]);
          setCardIndex([]);
        }
        setLayover(false);
      }, 1200);
      ///return clearTimeout(waitToFlip);
    }
    // eslint-disable-next-line
  }, [cardIndex]);

  useEffect(() => {
    let flippedState = [];
    for (let i = 0; i < CardsData.length * 2; i++) {
      if ([...solvedMemories, ...cardIndex].includes(i)) {
        flippedState.push(true);
      } else {
        flippedState.push(false);
      }
    }
    setFlippedCards([...flippedState]);
    // eslint-disable-next-line
  }, [clickedCards[1], solvedMemories, prevIndex]);

  function handleRestart() {
    if (window.confirm("Do you really want to restart?")) {
      setCardIndex([]);
      setClickedCards((prev) => []);
      setSolvedMemories([]);
      setPrevIndex(null);
      setMoves(0);
      setYouWon(false);
      setRestart(!restart);
      setFlippedCards((prev) => Array(CardsData.length * 2).fill(false));
    }
  }

  function handleSelect(elem) {
    const selected = elem.target.value;
    setMemorySize(selected);
  }

  return (
    <div className={styles.all}>
      {layover && <div className={styles.overlay}></div>}
      <div className={styles.points}>
        <div className={styles.moves}>
          Done: {solvedMemories.length / 2} / {memorySize}
        </div>
        <select className={styles.dropdown} onChange={handleSelect}>
          <option value={12}>-choose a size-</option>
          <option value={12}>12</option>
          <option value={8}>8</option>
          <option value={6}>6</option>
          <option value={4}>4</option>
          <option value={2}>2</option>
        </select>
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
            flippedCards={flippedCards}
            memorySize={memorySize}
            setLayover={setLayover}
            modal={
              <InfoModal
                key={index}
                index={index}
                placeTitle={el.name}
                placeInfo={el.info}
                solvedMemories={solvedMemories}
                placeContribution={el.contribution}
              />
            }
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
