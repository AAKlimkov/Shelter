import { CarouselPage } from "./app/carouselPage";
import Control from "./common/control";
import "../../style.css";
const about = document.querySelector(".about");
const header = document.querySelector(".header");
const help = document.querySelector(".help");
const donate = document.querySelector(".donate");
const footer = document.querySelector(".footer");
const burger = document.querySelector(".header-icon");
const menu = document.querySelector(".header-menu");
const wrapper = document.querySelector(".wrapper");
const icon = document.querySelector(".header-icon");
const hedAbout = document.querySelector(".header-about");
let shad = new Control(document.body);
const corouselButton = new CarouselPage(document.body);

corouselButton.node.before(about);
corouselButton.node.after(footer);
corouselButton.node.after(donate);
corouselButton.node.after(help);
shad.node.after(header);

burger.addEventListener("click", () => {
  shad.node.classList.toggle("shad");
  wrapper.classList.toggle("__active");
  menu.classList.toggle("__activemenu");
  icon.classList.toggle("__activeicon");
  hedAbout.classList.toggle("__activeAbout");
  document.body.classList.toggle("__activebody");

});
document.body.onclick = (e) => {
  console.log(e.target);

  let cl = e.target as HTMLElement;
  if (cl.classList.contains("shad")) {
    wrapper.classList.remove("__active");
    menu.classList.remove("__activemenu");
    icon.classList.remove("__activeicon");
    hedAbout.classList.remove("__activeAbout");
    shad.node.classList.toggle("shad");
    document.body.classList.toggle("__activebody");
  }

  if (cl.classList.contains("nav-link")) {
    wrapper.classList.remove("__active");
    menu.classList.remove("__activemenu");
    icon.classList.remove("__activeicon");
    hedAbout.classList.remove("__activeAbout");
    shad.node.classList.toggle("shad");
    document.body.classList.toggle("__activebody");
  }
};
