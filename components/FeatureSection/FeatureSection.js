import React, { Component } from "react";
import styles from "./FeatureSection.module.sass";
import typography from "../../styles/Typography.module.sass";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatureCard from "../Cards/FeatureCard/FeatureCard.js";

// export const FeatureSection = () => {
class FeatureSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("https://changeholidays.pythonanywhere.com/api/v1/packages/feature/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          tours: data,
          loaded: true
        });
      });
  }

  render() {
    return (
      <div className={styles.featureSection + " container"} >
        <div className={styles.left}>
          <h2 className={typography.title1}>Plan a Trip</h2>
          <p>
            <strong>The journey of a thousand miles begins with a single step.</strong>
          </p>
          <a href="" className={styles.roundedLink + " " + typography.button}>
            Explore
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>
        {this.state.tours.map((tour, index) => {
          return (
            <FeatureCard
              cardImage={"https://changeholidays.pythonanywhere.com" + tour.intro_image}
              cardTitle={tour.custom_title}
              cardDays={tour.duration}
              cardPrice={tour.price}
              key={index}
            />
          );
        })}
      </div >
    );
  }

};

export default FeatureSection;
