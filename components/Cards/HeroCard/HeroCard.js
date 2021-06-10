import React from "react";
import styles from "./HeroCard.module.sass";
import typography from "../../../styles/Typography.module.sass";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroCard = () => {
  return (
    <div className={styles.heroCard}>
      <div className="card-left">
        <span className={typography.titleTag + " " + styles.dimText}>
          top pick
        </span>
        <div className={typography.title + " " + styles.title}>Lukla</div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <span className={styles.dimText}>summer tour</span>
          <div className={styles.date}>mar,2021</div>
        </div>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
