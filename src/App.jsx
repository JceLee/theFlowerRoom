import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from "./view/MainView";
import Arrangements from "./view/Arrangements";
import Footer from "./view/Footer";
import "./App.scss";
import { Row, Col } from "antd";

export default function App() {
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

      <Router>
        <Route exact path="/" component={MainView} />
        <Route exact path="/arrangements" component={Arrangements} />
      </Router>
      <Footer />
    </>
  );
}
