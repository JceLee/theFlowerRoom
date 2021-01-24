import React from "react";
import {Link} from "react-router-dom";

export default function SecondView() {
  return (
    <div style={{background : "gray" , height : "400px", width : "70%", margin : "0 auto"}}>
      SecondView
      <Link to={"arrangements"}><button> Shop </button></Link>
      <button> Best Selling </button>
    </div>
  )
}
