import React from "react";
import styles from "./ContactHeader.module.sass";
// import typography from "../../styles/Typography.module.sass";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <div className={styles.headerContents}>
        <div className={styles.contact}>
          <span>
            Email : info@changeholidaysplanner.com
        </span>
          <span> | </span>
          <span>
            Contact : 01-1234567,  9807677403
        </span>
        </div>
        <div className={styles.brandIcon}>
          <a href="https://www.facebook.com/changeholidays">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/changeholidays/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
