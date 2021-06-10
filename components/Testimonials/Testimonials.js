import React, { Component } from "react";
import styles from "./Testimonials.module.sass";
// import typography from "../../styles/Typography.module.sass";
import TestimonialCard from "../Cards/TestimonialCard/TestimonialCard.js";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

// export const Testimonials = () => {
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("https://changeholidays.pythonanywhere.com/api/v1/testimonials/")
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
      <div className={styles.testimonialSection + " container custom-swiper-testimonial"} >
        {/* <div className={styles.packages}> */}
        < Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.state.packages.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <TestimonialCard
                  cardRating={item.rate}
                  cardName={item.full_name}
                  cardDesignation={item.role}
                  cardText={item.content}
                  cardImage={"https://changeholidays.pythonanywhere.com" + item.testimonie_image}
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

export default Testimonials;
