import React, { useState } from "react";
import { Image } from "antd";
import MobileSize from "./mainView/MobileSize";
import LaptopSize from "./mainView/LaptopSize";
import menu1 from "../assets/products/1.jpeg";
import menu2 from "../assets/products/2.jpeg";
import letter from "../assets/letter.jpeg";

const menu = [
  {
    title: "Menu1",
    url: menu1,
  },
  {
    title: "Menu2",
    url: menu2,
  },
];

export default function MainView() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  const imageCard = (menu, index) => {
    return (
      <li className="imageCard" key={index}>
        <div className="imgWrapper">
          <Image src={menu.url} />
        </div>
        <div className="innerContent">
          <p className="title">{menu.title}</p>
        </div>
      </li>
    );
  };

  return (
    <>
      <section className="searchBarSection">
        {screenWidth < tabletLWidth ? <MobileSize /> : <LaptopSize />}
      </section>
      <section className="menu" style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div className="contents">
          <ul>{menu.map((menu, index) => imageCard(menu, index))}</ul>
        </div>
      </section>
      <section style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <Image src={letter} />
      </section>
    </>
  );
}
