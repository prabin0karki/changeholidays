import React from "react";
import styles from "./FeatureCard.module.sass";
import typography from "../../../styles/Typography.module.sass";
import propTypes from "prop-types";

export const FeatureCard = ({ cardImage, cardTitle, cardDays, cardPrice }) => {
  return (
    <div className={styles.featureCard}>
      <img src={cardImage} />
      <h3 className={typography.title2}>{cardTitle}</h3>
      <div className={typography.button + " " + styles.dimText}>
        {cardDays} Days tour
      </div>
      <div className={typography.button + " " + styles.price}>
        Tours from NPR {cardPrice}
      </div>
    </div>
  );
};

FeatureCard.defaultProps = {
  cardTitle: "Title of the card",
  cardDays: "45",
  cardPrice: "500",
};

FeatureCard.propTypes = {
  cardTitle: propTypes.string,
  cardDays: propTypes.string,
  cardPrice: propTypes.string,
};

export default FeatureCard;
