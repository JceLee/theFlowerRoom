import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Tabs, BackTop } from "antd";
import flower1 from "../assets/products/1.jpeg";
import flower2 from "../assets/products/2.jpeg";
import flower3 from "../assets/products/3.jpeg";
import flower4 from "../assets/products/4.jpeg";
import flower5 from "../assets/products/5.jpeg";
import flower6 from "../assets/products/6.jpeg";
import flower7 from "../assets/products/7.jpeg";
import flower8 from "../assets/products/8.jpeg";

const { TabPane } = Tabs;

const arrangements = [
  {
    title: "Flower1",
    price: "45",
    url: flower1,
  },
  {
    title: `Flower2`,
    price: "45",
    url: flower2,
  },
  {
    title: "Flower3",
    price: "45",
    url: flower3,
  },
  {
    title: `Flower4`,
    price: "45",
    url: flower4,
  },
  {
    title: "Flower5",
    price: "45",
    url: flower5,
  },
  {
    title: `Flower6`,
    price: "45",
    url: flower6,
  },
  {
    title: "Flower7",
    price: "45",
    url: flower7,
  },
  {
    title: `Flower8`,
    price: "45",
    url: flower8,
  },
];

const shop = [
  {
    title: "Flower1",
    price: "45",
    url: flower1,
  },
  {
    title: `Flower2`,
    price: "45",
    url: flower2,
  },
  {
    title: `Flower6`,
    price: "45",
    url: flower6,
  },
  {
    title: `Flower8`,
    price: "45",
    url: flower8,
  },
];

const bestSelling = [
  {
    title: "Flower1",
    price: "45",
    url: flower1,
  },
  {
    title: `Flower2`,
    price: "45",
    url: flower2,
  },
  {
    title: `Flower8`,
    price: "45",
    url: flower8,
  },
];

export default function SecondView() {
  const imageCard = (product, index) => {
    return (
      <li className="imageCard" key={index}>
        <div className="imgWrapper">
          <Image src={product.url} width={"100%"} height={"100%"} />
        </div>
        <div className="innerContent">
          <p className="title">{product.title}</p>
          <p className="title">${product.price}</p>
        </div>
      </li>
    );
  };

  return (
    <section className="secondView">
      <Row className="title" style={{ maxWidth: "840px", margin: "10px auto" }}>
        <Col span={12} className="theFlowerRoom">
          <Link to="/">The Flower Room</Link>
        </Col>
        <Col span={12} className="subTitle">
          <h4 className="content">HAPPINESS IS TO HOLD FLOWERS IN YOUR</h4>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Arrangements" key="1">
          <div className="shop">
            <div className="products">
              <ul>{arrangements.map((product, index) => imageCard(product, index))}</ul>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Shop" key="2">
          <div className="shop">
            <div className="products">
              <ul>{shop.map((product, index) => imageCard(product, index))}</ul>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Best Selling" key="3">
          <div className="shop">
            <div className="products">
              <ul>{bestSelling.map((product, index) => imageCard(product, index))}</ul>
            </div>
          </div>
        </TabPane>
      </Tabs>

      <BackTop visibilityHeight={0}>
        <div className="backTopButton">Top</div>
      </BackTop>
    </section>
  );
}
