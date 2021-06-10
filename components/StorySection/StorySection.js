import React, { Component } from "react";
import styles from "./StorySection.module.sass";
import typography from "../../styles/Typography.module.sass";
import StoryCard from "../Cards/StoryCard/StoryCard.js";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const StorySection = () => {
class StorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("https://changeholidays.pythonanywhere.com/api/v1/stories/")
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
          stories: data,
          loaded: true
        });
      });
  }

  render() {
    return (
      <div className={styles.storySection + " container"} >
        <div className={styles.left}>
          <h2 className={typography.title1}>Travel Stories</h2>
        </div>
        <div className={styles.stories}>
          {this.state.stories.slice(0, 4).map((story, index) => {
            return (
              <StoryCard
                cardTitle={story.custom_title}
                cardText={story.description}
                cardDate={new Date(story.last_published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
                cardLink={story.link}
                cardImage={"https://changeholidays.pythonanywhere.com" + story.intro_image}
                key={index}
              />
            );
          })}
        </div>
        <a href="" className={styles.seeMoreLink + " " + typography.button}>
          See more stories
        <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </a>
      </div>
    );
  }

};

export default StorySection;
