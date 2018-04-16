import allImages from "../images/crazyeyes.jpg";

// function importAll (r) {
//     console.log(r)
//   r.keys().forEach(r);
// }

let x = require.context('../images/', true, /\.jpg$/);

x.keys().forEach((key) => {
    console.log(key);
})

// export default x.keys();
export default allImages;