import React from "react";
// import "./FriendCard.css"; import Images from "./Images.js" let req =
// require.context('../images/', true, /\.jpg$/);
let Images = [];
let req = require.context('../images/', true, /\.jpg$/);

req
  .keys()
  .forEach((key) => {
    req(key);
  })


// function importAll(r) {
//   let Images = [];
//   r
//     .keys()
//     .forEach((key) => {
//       Images.push(key);
//     })
//   return Images;
// }

// const Images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// let Images = req.keys().forEach((key) => {     req(key); })

console.log(Images);
const FriendCard = () => (
  <div className="card">
    <div className="img-container">
      <img alt={"simething"} src={Images['crazyeyes.jpg']}/>
    </div>
  </div>
);

export default FriendCard;
