import React, { useState } from "react";
import { Image } from "antd";
import MobileSize from "./mainView/MobileSize";
import LaptopSize from "./mainView/LaptopSize";
import menu1 from "../assets/products/1.jpeg";
import menu2 from "../assets/products/2.jpeg";
import letter from "../assets/letter.jpeg";
import { InstagramOutlined, MailOutlined } from "@ant-design/icons";

const menu = [
  {
    title: "SHOP",
    url: menu1,
  },
  {
    title: `BEST
    SELLING`,
    url: menu2,
  },
];

const message = `Send smile to your special ones.
We will do our best to give you a best service
with the reasonable price. Choose from our selection of hand-tied bouquets. 
Customizations are always welcome birthdays, anniversary's and all other special
occasions. Contact us for any inquiries :)`;

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
        <div class="container">
          <div className="innerContent">
            <p className="title">{menu.title}</p>
          </div>
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
      <section className="imgCard" style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <h3>Letter Card</h3>
        <div className="imgWrapper">
          <Image centered src={letter} />
        </div>
      </section>
      <section className="textCard" style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <div className="contents">
          <ul>
            <li className="imageCard">
              <div class="container">
                <div className="innerContent">
                  <h4 className="subTitle">ABOUT US</h4>
                  <div className="message">{message}</div>
                </div>
              </div>
            </li>
            <li className="imageCard">
              <div class="container">
                <div className="innerContent">
                  <h4 className="subTitle">CONTACT US</h4>
                  <p>
                    <InstagramOutlined /> theflower_room_yyc
                  </p>
                  <p>
                    <MailOutlined /> flowerroomyyc@gmail.com
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
