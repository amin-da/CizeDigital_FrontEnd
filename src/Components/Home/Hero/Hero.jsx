import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import SwiperTop from "./SwiperTop";
import Loading from "./Loading";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [isLoading]);

  return (
    <>
      <div className="header_home_hero">
        {isLoading ? (
          <>
            <div className="header_home_hero_right">
              <Slider />
            </div>
            <div className="header_home_hero_left">
              <div className="header_home_hero_left_top">
                <h3>نقد و بررسی</h3>
                <SwiperTop />
              </div>
              <div className="header_home_hero_left_bottom">پایین</div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Hero;
