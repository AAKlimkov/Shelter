import Control from "../common/control";

const petsJSON = require("../pets.json");
const baseURL = petsJSON.imageURL;
interface IPet {
  name: string;
  img: string;
  type: string;
  breed: string;
  description: string;
  age: string;
  inoculations: Array<string>;
  diseases: Array<string>;
  parasites: Array<string>;
}

export class PetsPopap extends Control {
  constructor(parentNode: HTMLElement, petCard: IPet) {
    super(parentNode, "div", "pets-popap");
    const body = new Control(this.node, "div", "pets-popap-body");
    body.node.onclick = (event) => {
      if (event.target == body.node) {
        document.body.classList.remove("lock");
        this.destroy();
      }
    };
    body.node.onmouseover = (e) => {
      if (e.target == body.node) {
        body.node.classList.add("popap-pointer");
        close.node.classList.add("popap-close");
      } else {
        body.node.classList.remove("popap-pointer");
        close.node.classList.remove("popap-close");
      }
    };
    const content = new Control(body.node, "div", "pets-popap-content");
    const close = new Control(body.node, "a", "pets-popap-close");
    close.node.onclick = () => {
      document.body.classList.remove("lock");
      this.destroy();
    };
    const closeImg = new Control(close.node, "img", "pets-popap-closeimg");
    closeImg.node.setAttribute("src", "./src/assets/Icon/Close.svg");
    // closeImg.node.setAttribute("width", "12px

    const img = new Control(content.node, "img", "pets-popap-img");
    const info = new Control(content.node, "div", "pets-popap-info");

    img.node.setAttribute("src", petsJSON.imageURL + petCard.img);
    img.node.setAttribute("width", "500px");
    img.node.setAttribute("height", "500px");
    const title = new Control(
      info.node,
      "div",
      "pets-popap-tittle",
      petCard.name
    );
    const subTitle = new Control(
      info.node,
      "div",
      "pets-popap-subtittle",
      `${petCard.type} - ${petCard.breed} `
    );
    const text = new Control(
      info.node,
      "div",
      "pets-popap-text",
      petCard.description
    );
    const list = new Control(info.node, "ul", "pets-popap-list");
    const listItem = new Control(info.node, "li", "pets-popap-listItem");
    listItem.node.innerHTML = `<b>Age :</b> ${petCard.age}`;
    const listItem2 = new Control(
      info.node,
      "li",
      "pets-popap-listItem",
      `${[...petCard.inoculations]}`
    );
    listItem2.node.innerHTML =
      "<b>Inoculations : </b>" + listItem2.node.innerHTML;
    const listItem3 = new Control(
      info.node,
      "li",
      "pets-popap-listItem",
      `${[...petCard.diseases]}`
    );
    listItem3.node.innerHTML = "<b>Diseases : </b>" + listItem3.node.innerHTML;
    const listItem4 = new Control(
      info.node,
      "li",
      "pets-popap-listItem",
      `${[...petCard.parasites]}`
    );
    listItem4.node.innerHTML = "<b>Parasites : </b>" + listItem4.node.innerHTML;
  }
}
