import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../assets/scss/AwesomeSlider.scss";
import mobile1 from "../../assets/products/1.jpeg";
import mobile2 from "../../assets/products/2.jpeg";
import mobile3 from "../../assets/products/3.jpeg";

const mobiles = [mobile1, mobile2, mobile3];

export default function MobileSize() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="searchBarSectionImg" style={{ width: "100%", height: "450px" }}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        bullets={false}
        fillParent={true}
        buttons={false}
        showTimer={false}
        cssModule={sliderScss}
      >
        {mobiles.map((img, inx) => (
          <div data-src={img} key={inx} />
        ))}
      </AutoplaySlider>
    </div>
  );
}
