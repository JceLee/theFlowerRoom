import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainView from "./view/MainView";
import Arrangements from "./view/Arrangements";
import SecondView from "./view/SecondView";
import Footer from "./view/Footer";
import "./App.scss";
import ScrollToUp from "./ScrollToUp";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToUp>
          <Route exact path="/" component={MainView} />
          <Route exact path="/arrangements" component={SecondView} />
        </ScrollToUp>
      </Router>
      <Footer />
    </>
  );
}
