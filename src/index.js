import styles from "./index.css";
import logo from "./assets/webpack.jpg";

let num = [1,2,3];
let codenext = () => console.log(...num);

let map = document.getElementById("app");
map.innerHTML = `<img src="${logo}"/>`
