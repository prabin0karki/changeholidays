import React, { Component } from "react";
import styles from "./Packages.module.sass";
import typography from "../../styles/Typography.module.sass";
import DisplayCard from "../Cards/DisplayCard/DisplayCard.js";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

// export const Packages = () => {
class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  componentDidMount() {
    fetch("https://changeholidays.pythonanywhere.com/api/v1/packages/")
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
          packages: data,
          loaded: true
        });
      });
  }
  render() {
    return (
      <div className={styles.packagesSection + " container packages"} >
        <div className={styles.heading}>
          <h2 className={typography.title1}>Where we travel</h2>
        </div>
        {/* <div className={styles.packages}> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            976: {
              slidesPerView: 3,
            },
          }}
        >
          {this.state.packages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <DisplayCard
                  cardTitle={item.custom_title}
                  cardSubtitle={item.description}
                  cardDuration={item.duration}
                  cardPrice={item.price}
                  cardLink={item.link}
                  cardImage={"https://changeholidays.pythonanywhere.com" + item.intro_image}
                />
              </SwiperSlide>
            );
          })
          }
        </Swiper >
        {/* </div> */}
      </div >
    );
  }

};

export default Packages;
