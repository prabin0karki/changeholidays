import React from "react";
import styles from "./StoryCard.module.sass";
import typography from "../../../styles/Typography.module.sass";
import propTypes from "prop-types";

export const StoryCard = ({
  cardTitle,
  cardText,
  cardDate,
  cardLink,
  cardImage,
}) => {
  return (
    <div className={styles.storyCard}>
      <div className={styles.storyLeft}>
        <img src={cardImage} alt="Change Holidays Planner" />
        <div className={styles.cardDate + " " + typography.para}>
          {cardDate}
        </div>
      </div>
      <div>
        <h3 className={typography.title2}>{cardTitle}</h3>
        <p className={typography.para1}>{cardText}</p>
        <a href={cardLink}>Read More...</a>
      </div>
    </div>
  );
};

StoryCard.defaultProps = {
  cardTitle: "Title of the card",
  cardText:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
  cardDate: "Feb 2022",
  cardLink: "#",
  cardImage: "/img/hero/hero.jpg",
};

StoryCard.propTypes = {
  cardTitle: propTypes.string,
  cardText: propTypes.string,
  cardDate: propTypes.string,
  cardLink: propTypes.string,
  cardImage: propTypes.string,
};

export default StoryCard;
