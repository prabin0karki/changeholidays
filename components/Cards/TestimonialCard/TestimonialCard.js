import React from "react";
import styles from "./TestimonialCard.module.sass";
// import typography from "../../../styles/Typography.module.sass";
import propTypes from "prop-types";
import typography from "../../../styles/Typography.module.sass";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TestimonialCard = ({ cardRating, cardName, cardDesignation, cardText, cardImage }) => {
  var comp;
  if (cardRating == 1) {
    comp = <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
    </div>
  } else if (cardRating == 2) {
    comp = <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
    </div>
  } else if (cardRating == 3) {
    comp = <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faRegularStar} />
      <FontAwesomeIcon icon={faRegularStar} />
    </div>
  } else if (cardRating == 4) {
    comp = <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faRegularStar} />
    </div>
  } else {
    comp = <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  }
  return (
    <div className={styles.testimonialCard}>
      <img src={cardImage} />
      <div className={styles.cardRight}>
        <div className={styles.heading}>
          <h2 className={typography.title1 + " " + styles.testimonialTitle}>What People say</h2>
        </div>
        <div className={styles.cardContents}>
          {comp}
          <div className={styles.name}>
            {cardName}
          </div>
          <div className={styles.designation}>
            {cardDesignation}
          </div>
          <p>
            {cardText}
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.defaultProps = {
  cardName: "Name of the personn",
  cardDesignation: "Traveller",
  cardText: "If you prefer to carry a digital travel guide, download the free Lonely Planet travel guide app and download it to your mobile or tablet for free. If you want to book your trip without a plan, Lonely Planet can help you find the best places to visit, see and do it. This is probably the page you are most familiar with, where you can rent a car, book a hotel room and search for other travel services.",
  cardImage: "/img/packages/4.jpg",
};

TestimonialCard.propTypes = {
  cardName: propTypes.string,
  cardDesignation: propTypes.string,
  cardText: propTypes.string,
  cardImage: propTypes.string,
};

export default TestimonialCard;
