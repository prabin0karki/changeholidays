import React from "react";
import styles from "./Hero.module.sass";

export const Hero = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <img src="/img/hero/hero.jpg" />
      </div>
    </div>
  );
};

export default Hero;
