import React from "react";
// import "./FriendCard.css";
import Images from "./Images.js"

console.log(Images);
const FriendCard = () => (
  <div className="card">
    <div className="img-container">
      <img alt={"simething"} src={Images[0]}/>
    </div>
  </div>
);

export default FriendCard;
