import React, { useState } from "react";
import MobileSize from "./mainView/MobileSize";
import LaptopSize from "./mainView/LaptopSize";
import menu1 from "../assets/background/menu01.jpg";
import menu2 from "../assets/background/menu02.jpg";
import letter from "../assets/letter.jpeg";
import { InstagramOutlined, MailOutlined } from "@ant-design/icons";
import { Row, Col, BackTop, Image } from "antd";
import { Link } from "react-router-dom";

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
We will do our best to give you a best service with the reasonable price. Choose from our selection of hand-tied bouquets. 
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
      <Link to="/arrangements">
        <li className="imageCard" key={index}>
          <div class="container" style={{ backgroundImage: `url(${menu.url})`, opacity: "0.7" }}>
            <div className="innerContent">
              <p className="title">{menu.title}</p>
            </div>
          </div>
        </li>
      </Link>
    );
  };

  return (
    <>
      <Row className="title" style={{ maxWidth: "840px", margin: "10px auto" }}>
        <Col span={12} className="theFlowerRoom">
          The Flower Room
        </Col>
        <Col span={12} className="subTitle">
          <h4 className="content">HAPPINESS IS TO HOLD FLOWERS IN YOUR</h4>
        </Col>
      </Row>
      <section className="searchBarSection">
        {screenWidth < tabletLWidth ? <MobileSize /> : <LaptopSize />}
      </section>
      <section className="menu" style={{ maxWidth: "1024px", margin: "50px auto" }}>
        <div className="contents">
          <ul>{menu.map((menu, index) => imageCard(menu, index))}</ul>
        </div>
      </section>
      <section className="imgCard" style={{ maxWidth: "1024px", margin: "50px auto" }}>
        <h3>Letter Card</h3>
        <div className="imgWrapper">
          <Image centered src={letter} />
        </div>
      </section>
      <section className="textCard" style={{ maxWidth: "1024px", margin: "50px auto" }}>
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
                  <div className="icons">
                    <p className="icon">
                      <InstagramOutlined /> theflower_room_yyc
                    </p>
                    <p className="icon">
                      <MailOutlined /> flowerroomyyc@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <BackTop visibilityHeight={0}>
            <div className="backTopButton">Top</div>
          </BackTop>
        </div>
      </section>
    </>
  );
}
