import styles from "./InfoModal.module.css";
<<<<<<< HEAD
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsPatchQuestionFill } from "react-icons/bs";
=======
import { useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
>>>>>>> 72e4231 (styling for modal)
function InfoModal({ placeTitle, placeInfo, solvedMemories, index }) {
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(solvedMemories.indexOf(index) !== -1, "clicked", index);
  return (
    <>
      {isModalOpen ? (
        <div className={styles.modalContainer}>
          <h2>{placeTitle}</h2>
          <p>{placeInfo}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(false);
            }}
            className={styles.btnInfoModalClose}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      ) : (
        solvedMemories.indexOf(index) !== -1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            className={styles.btnInfoModalOverlay}
          >
<<<<<<< HEAD
            <BsPatchQuestionFill />
=======
            Learn More
>>>>>>> 72e4231 (styling for modal)
          </button>
        )
      )}
    </>
  );
}

export default InfoModal;
