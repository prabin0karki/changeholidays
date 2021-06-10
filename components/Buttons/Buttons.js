import React from "react";
import styles from "./Buttons.module.sass";
import typography from "../../styles/Typography.module.sass";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons = () => {
  return (
    <>
      <a href="" className={styles.roundedLink + " " + typography.button}>
        Explore
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </a>

      <a href="" className={styles.seeMoreLink + " " + typography.button}>
        See more stories
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </a>
    </>
  );
};

export default Buttons;
