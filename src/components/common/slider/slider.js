"use client";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./slider.module.css";
import { ENUMS } from "@/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 100,
  cssEase: "linear",
};

const Sliderr = () => {
  return (
    <div className={styles.sliders}>
      <Slider {...settings}>
        {ENUMS.COMPANIES.map((item, index) => (
          <div key={index}>
            <Image
              src={item}
              alt="Home-Logo--Image"
              width={120}
              height={120}
              objectFit="cover"
              // style={{ opacity: "0.5" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderr;
