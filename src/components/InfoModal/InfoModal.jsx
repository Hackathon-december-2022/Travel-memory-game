import styles from "./modal.module.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useRef, useState } from "react";

function InfoModal({ placeTitle, placeInfo, index, cardIndex }) {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));
  return (
    <>
      {isModalOpen ? (
        <div ref={ref} className={styles.modalContainer}>
          <h2>{placeTitle}</h2>
          <p>{placeInfo}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(false);
            }}
            className={styles.btnInfoModal}
          >
            close
          </button>
        </div>
      ) : (
        cardIndex !== index && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            className={styles.btnInfoModal}
          >
            open
          </button>
        )
      )}
    </>
  );
}

export default InfoModal;
