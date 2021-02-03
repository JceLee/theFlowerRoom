import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../assets/scss/AwesomeSlider.scss";
import bg1 from "../../assets/background/1.jpg";
import bg2 from "../../assets/background/2.jpg";
import bg3 from "../../assets/background/3.jpg";

const desktops = [bg1, bg2, bg3];

export default function LaptopSize() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div
      className="searchBarSectionDesktopImg"
      style={{ width: "100%", height: "450px", maxWidth: "1024px", margin: "0 auto" }}
    >
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        bullets={false}
        fillParent={true}
        buttons={false}
        cssModule={sliderScss}
      >
        {desktops.map((img, inx) => (
          <div data-src={img} key={inx} />
        ))}
      </AutoplaySlider>
    </div>
  );
}
