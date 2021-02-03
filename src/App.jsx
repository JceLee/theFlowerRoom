import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from "./view/MainView";
import Arrangements from "./view/Arrangements";
import Footer from "./view/Footer";
import "./App.scss";

export default function App() {
  return (
    <>
      <h3 className="title" style={{ maxWidth: "1024px", margin: "15px auto" }}>
        The Flower Room
      </h3>
      <Router>
        <Route exact path="/" component={MainView} />
        <Route exact path="/arrangements" component={Arrangements} />
      </Router>
      <Footer />
    </>
  );
}
