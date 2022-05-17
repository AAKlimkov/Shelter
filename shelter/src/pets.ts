import "../pages/pets/style.css";
import Control from "./common/control";
import { Pagination } from "./app/pagination";
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const burger = document.querySelector(".header-icon");
const menu = document.querySelector(".header-menu");
const wrapper = document.querySelector(".wrapper");
const icon = document.querySelector(".header-icon");
const link = document.querySelector(".header-menu-list-item");
let shad = new Control(document.body);

const corouselButton = new Pagination(document.body);
shad.node.after(header);

corouselButton.node.after(footer);
burger.addEventListener("click", () => {
  shad.node.classList.toggle("shad");
  wrapper.classList.toggle("__active");
  menu.classList.toggle("__activemenu");
  icon.classList.toggle("__activeicon");
  document.body.classList.toggle("__activebody");
});
document.body.onclick = (e) => {
  console.log(e.target);

  let cl = e.target as HTMLElement;
  if (cl.classList.contains("shad")) {
    shad.node.classList.toggle("shad");
    document.body.classList.toggle("__activebody");
    wrapper.classList.toggle("__active");
    menu.classList.toggle("__activemenu");
    icon.classList.toggle("__activeicon");

  }
  if (cl.classList.contains("nav-link")) {
    shad.node.classList.toggle("shad");
    document.body.classList.toggle("__activebody");
    wrapper.classList.toggle("__active");
    menu.classList.toggle("__activemenu");
    icon.classList.toggle("__activeicon");
 
  }
};
