import Control from "../common/control";

export class PetsNavigation extends Control {
  onPlusOne: () => void;
  onLastPage: () => void;
  onFirstPage: () => void;
  onMinusOne: () => void;
  constructor(parentNode: HTMLElement, number: number, lastPage: boolean) {
    super(parentNode, "div", "pets-navigation");
    const buttonLeftFull = new Control(this.node, "button", "", "<<");
    const buttonLeft = new Control(this.node, "button", "", "<");

    const pageNumber = new Control(
      this.node,
      "button",
      "number",
      number.toString()
    );
    const buttonRight = new Control(this.node, "button", "", ">");
    buttonRight.node.onclick = () => {
      this.onPlusOne();
    };
    const buttonRightFull = new Control(this.node, "button", "", ">>");
    
    buttonRightFull.node.onclick = () => {
      this.onLastPage();
    };
    buttonLeftFull.node.onclick = () => {
      this.onFirstPage();
    };
    buttonLeft.node.onclick = () => {
      this.onMinusOne();
    };
    if (number == 1) {
      buttonLeftFull.node.classList.add("inactive");
      buttonLeft.node.classList.add("inactive");
    } else {
      buttonLeftFull.node.classList.add("active");
      buttonLeft.node.classList.add("active");
    }

    if (lastPage) {
      buttonRight.node.classList.add("inactive");
      buttonRightFull.node.classList.add("inactive");
    } else {
      buttonRight.node.classList.add("active");
      buttonRightFull.node.classList.add("active");
    }
  }
}
