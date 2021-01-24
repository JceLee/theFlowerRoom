import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainView from "./view/MainView"
import Arrangements from "./view/Arrangements";

export default function App() {
  return (
    <>
    <h3 style={{width : "70%", margin : "0 auto"}}>The Flower Room</h3>
    <Router>
      <Route exact path="/" component={MainView}/>
      <Route exact path="/arrangements" component={Arrangements}/>
    </Router>
      </>
  );
}
