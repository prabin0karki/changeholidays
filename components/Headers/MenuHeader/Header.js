import React from "react";
import styles from "./Header.module.sass";
// import typography from "../../../styles/Typography.module.sass";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="" className={styles.logo}>
          <img src="img/logo.png" />
        </a>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} htmlFor={styles.menuBtn}><span className={styles.navicon}></span></label>
        <ul className={styles.menu}>
          <li><a href="#work">Home</a></li>
          <li><a href="#about">Where we travel</a></li>
          <li><a href="#careers">How we travel</a></li>
          <li><a href="#whyChangeHolidays">Why change holidays</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;