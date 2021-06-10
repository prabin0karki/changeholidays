import React from "react";
import styles from "./DisplayCard.module.sass";
import typography from "../../../styles/Typography.module.sass";
import propTypes from "prop-types";

export const DisplayCard = ({ cardTitle, cardSubtitle, cardDuration, cardPrice, cardImage, cardLink }) => {
  return (
    <div className={styles.displayCard}>
      <img src={cardImage} />
      <div className={styles.cardTag}>
        <span className={styles.dimText}>
          From
        </span>
        <span>
          <strong>NPR {cardPrice} </strong>
        </span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={typography.title2}>{cardTitle}</h3>
        <h4 className={typography.para1 + " " + styles.dimSubtitle}>{cardSubtitle}</h4>
        <div className={typography.button + " " + styles.duration}>
          Duration: {cardDuration}
        </div>
        <div className={typography.button + " " + styles.price}>
          Tours from NPR {cardPrice}
        </div>
        <div className={styles.links}>
          <a href={cardLink} className={styles.seeMoreLink + " " + typography.button}>
            View Details
          </a>
          <a href="" className={styles.roundedLink + " " + typography.button}>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

DisplayCard.defaultProps = {
  cardTitle: "Title of the card",
  cardSubtitle: "Subtitle of the card",
  cardDuration: "2 Nights 3 Days",
  cardPrice: "500",
  cardLink: "#",
  cardImage: "/img/packages/4.jpg",
};

DisplayCard.propTypes = {
  cardTitle: propTypes.string,
  cardSubtitle: propTypes.string,
  cardDuration: propTypes.string,
  cardPrice: propTypes.string,
  cardLink: propTypes.string,
  cardImage: propTypes.string,
};

export default DisplayCard;
