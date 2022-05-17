import Control from "../common/control";
import { PetBlock } from "./PetBlock";
import { shuffle } from "./shuffle";
import "../../../style.css";

interface IAppSetting {}

export class CarouselPage extends Control {
  onBack: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "section", "pets");
    const content = new Control(this.node, "div", "pets-content");

    const textBlock = new Control(content.node, "div", "pets-heading");
    textBlock.node.innerHTML = "Our friends who <br />are looking for a house";

    const corousel = new Control(content.node, "div", "pets-corusel");
    const buttonLeft = new Control(corousel.node, "button", "pets-left");
    const buttonLeftImg = new Control(buttonLeft.node, "img");

    buttonLeftImg.node.setAttribute("src", "./src/assets/Icon/Arrow Left.svg");
    buttonLeft.node.onclick = () => {
      petArticle.node.classList.add("transition-left");
      petArticle.node.onanimationend = () => {
        petArticle.node.classList.remove("transition-left");
        petBlock1.destroy();
        petBlock1 = new PetBlock(petArticle.node, centerArr);
        petBlock2.destroy();
        petBlock2 = new PetBlock(petArticle.node, sideArr);
        petBlock2.onModal = (petCard) => {
          console.log("here");

          // const modal = new PetsPopap(this.node, petCard);
        };
        petBlock3.destroy();
        petBlock3 = new PetBlock(petArticle.node, centerArr);
        arr0 = startArray.filter((el) => centerArr.indexOf(el) < 0);
        tempArr = centerArr;
        centerArr = shuffle(arr0).slice(0, 3);
        sideArr = tempArr;
      };
    };

    const startArray = [0, 1, 2, 3, 4, 5, 6, 7];

    let arr0: Array<number> = shuffle(startArray);
    let centerArr: Array<number> = arr0.slice(0, 3);
    arr0 = startArray.filter((el) => centerArr.indexOf(el) < 0);
    let sideArr: Array<number> = arr0.slice(0, 3);
    let tempArr: Array<number> = centerArr;
    const petCarousel = new Control(corousel.node, "div", "pets-carousel");
    const petArticle = new Control(petCarousel.node, "div", "pets-list");
    let petBlock1 = new PetBlock(petArticle.node, sideArr);
    let petBlock2 = new PetBlock(petArticle.node, centerArr);
    let petBlock3 = new PetBlock(petArticle.node, sideArr);

    const buttonRight = new Control(corousel.node, "button", "pets-right");
    const buttonRightImg = new Control(buttonRight.node, "img");
    buttonRightImg.node.setAttribute(
      "src",
      "./src/assets/Icon/Arrow Right.svg"
    );

    buttonRight.node.onclick = () => {
      petArticle.node.classList.add("transition-right");
      petArticle.node.onanimationend = () => {
        petArticle.node.classList.remove("transition-right");
        petBlock1.destroy();
        petBlock1 = new PetBlock(petArticle.node, centerArr);
        petBlock2.destroy();
        petBlock2 = new PetBlock(petArticle.node, sideArr);
        petBlock3.destroy();
        petBlock3 = new PetBlock(petArticle.node, centerArr);
        arr0 = startArray.filter((el) => centerArr.indexOf(el) < 0);
        tempArr = centerArr;
        centerArr = shuffle(arr0).slice(0, 3);
        sideArr = tempArr;
      };
    };

    const button = new Control(
      content.node,
      "button",
      "pets-accept",
      "Get to know the rest"
    );
    // const backButton = new Control(this.node, "button", "back", "back");
    // backButton.node.onclick = () => {
    //   this.onBack();
    // };
  }
}
