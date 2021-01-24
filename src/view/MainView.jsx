import React from "react";
import SecondView from "./SecondView";

export default function MainView() {
  return (
    <>
      <div style={{background : "yellow" , height : "500px", width : "70%", margin : "0 auto"}}>
        MainView
      </div>
      <SecondView/>
    </>
  )
}
