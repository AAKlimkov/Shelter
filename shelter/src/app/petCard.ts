import Control from "../common/control";

const petsJSON = require("../pets.json");
const baseURL = petsJSON.imageURL;

export class PetsCard extends Control {
  name: string;
  img: string
  onModal: (petCard: any) => void;
  constructor(parentNode: HTMLElement, name: string, img: string) {
    super(parentNode, "article", `pets-item`);
    this.name = name;
    this.img = img
    const petImg = new Control(this.node, "img", "pets-photo");
    const petSpan = new Control(this.node, "span", "pet-name", `${this.name}`);
    const petRef = new Control(
      this.node,
      "a",
      "pets-accept-secondary",
      "Learn more"
    );
    petRef.node.setAttribute("href", "#");

    petImg.node.setAttribute("src", this.img);
  }
}




    // swithPlus.node.onclick = () => {
    //   this.caruoselTemp = this.caruoselTemp.map((el) => {
    //     return el + 3;
    //   });
    //   const caruselButtons = new Control(this.node, "div");
    //   buttons.map(el => el.destroy())
    //   this.caruoselTemp.map((el, ind) => {
    //     const button = new Control(
    //       caruselButtons.node,
    //       "button",
    //       "",
    //       el.toString()
    //     );
    //     buttons.push(button)
    //     button.node.onclick = () => {
    //       this.onSlide(ind);
    //     };
    //   });
    //   this.onSwitch();
    // };

    // swithminus.node.onclick = () => {
    //   this.caruoselTemp = this.caruoselTemp.map((el) => {
    //     return el - 3;
    //   });

    //   const caruselButtons = new Control(this.node, "div");
    //   buttons.map(el => el.destroy())
    //   this.caruoselTemp.map((el, ind) => {
    //     const button = new Control(
    //       caruselButtons.node,
    //       "button",
    //       "",
    //       el.toString()
    //     );
    //     buttons.push(button)
    //     button.node.onclick = () => {
    //       this.onSlide(ind);
    //     };
    //   });

    //   this.onSwitch();
    // };