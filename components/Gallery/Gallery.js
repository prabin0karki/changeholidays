import React, { Component } from "react";
import styles from "./Gallery.module.sass";
import typography from "../../styles/Typography.module.sass";

// export const GallerySection = () => {
class GallerySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryImages: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("https://changeholidays.pythonanywhere.com/api/v1/images/")
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
          galleryImages: data.items,
          loaded: true
        });
      });
  }
  render() {
    return (
      <div className={styles.gallerySection + " container"} >
        <div className={styles.left}>
          <h2 className={typography.title1}>Gallery</h2>
        </div>
        <div className={styles.galleryCards}>
          {this.state.galleryImages.slice(0, 6).map((gallery, index) => {
            return (
              <img
                src={"https://changeholidays.pythonanywhere.com" + gallery.meta.download_url}
                key={index}
                alt="Change Holidays Planner"
              />
            );
          })}
        </div>
      </div>
    );
  }

};

export default GallerySection;
