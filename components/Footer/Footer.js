import React from "react";
import Link from "next/link";
import styles from "./Footer.module.sass";
import typography from "../../styles/Typography.module.sass";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footer + " container"}>
          <div className={styles.footerNavigation + " " + typography.para}>
            <Link href="/about-us">
              <a>about us</a>
            </Link>
            <Link href="#">
              <a>faqs</a>
            </Link>
            <Link href="#">
              <a>events</a>
            </Link>
            <Link href="#">
              <a>careers</a>
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <span className={typography.para}>Tour Destinations</span>
            <div className={styles.links}>
              <Link href="/about-us">
                <a>Manang</a>
              </Link>
              <Link href="#">
                <a>Kathmandu</a>
              </Link>
              <Link href="#">
                <a>Everest</a>
              </Link>
              <Link href="#">
                <a>Gosaikunda</a>
              </Link>
              <Link href="/about-us">
                <a>Manang</a>
              </Link>
              <Link href="#">
                <a>Kathmandu</a>
              </Link>
              <Link href="#">
                <a>Everest</a>
              </Link>
              <Link href="#">
                <a>Gosaikunda</a>
              </Link>
              <Link href="/about-us">
                <a>Manang</a>
              </Link>
              <Link href="#">
                <a>Kathmandu</a>
              </Link>
              <Link href="#">
                <a>Everest</a>
              </Link>
              <Link href="#">
                <a>Gosaikunda</a>
              </Link>
            </div>
          </div>
          <div className={styles.footerRight}>
            <span className={styles.title}>Ready to book your journey?</span>
            <span className={styles.title}>Give us a call.</span>
            <span className={styles.phone}>+977-980123456</span>
            <span className={styles.time}>Sun-Fri 9:00AM - 5:00 PM</span>
            <span className={styles.email}>more : info@changeholidaysplanner.com</span>
            <span className={styles.theme}>
              Don't listen to what they say, go see
            </span>
            <span className={styles.copyright}>
              ©Copyright 2021, Change Holidays Planner, all rights reserved.
            </span>
            <span>
              Powered by: <strong>Beyond Technology</strong>
            </span>
          </div>
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

export default Footer;
