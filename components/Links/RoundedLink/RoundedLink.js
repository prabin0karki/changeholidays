import React from "react";
import styles from "./RoundedLink.module.sass";
import typography from "../../../styles/Typography.module.sass";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RoundedLink = () => {
  return (
    <a className={styles.roundedLink + " " + typography.button}>
      Explore
      <span>
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </a>
  );
};

export default RoundedLink;
