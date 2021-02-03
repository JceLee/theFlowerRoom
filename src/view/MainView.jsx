import React, { useState } from "react";
import MobileSize from "./mainView/MobileSize";
import LaptopSize from "./mainView/LaptopSize";

export default function MainView() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div className="searchBarSection">
      {screenWidth < tabletLWidth ? <MobileSize /> : <LaptopSize />}
    </div>
  );
}
