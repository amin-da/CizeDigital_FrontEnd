import React from "react";
import "./Swiper.scss";
import "./MediaQueries.scss";
const SwiperTop = () => {
  return (
    <>
      <div id="swiper_top">
        <p className="hvr-wobble-vertical">محبوب ترین دسته بندی ها</p>
        <nav>
          <ul>
            <li>
              <a className="hvr-underline-from-center" href="#">
                هدفون ها
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-center" href="#">
                شارژر ها
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-center" href="#">
                پاور بانک ها
              </a>
            </li>
          </ul>
        </nav>
        <button className="hvr-bounce-to-top">مشاهده بیشتر ...</button>
      </div>
    </>
  );
};

export default SwiperTop;
