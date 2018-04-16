// import allImages from "../images/crazyeyes.jpg";

// function importAll (r) {
//     console.log(r)
//   r.keys().forEach(r);
// }

let req = require.context('../images/', true, /\.jpg$/);

req.keys().forEach((key) => {
    req(key);
})

// export default x.keys();
export default req;