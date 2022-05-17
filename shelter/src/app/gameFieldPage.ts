import Control from "../common/control";

interface IQuizOption {
  gameName: string;
  categoryIndex: number;
}

export class GameFieldPage extends Control {
  onBack: () => void;
  onHome: () => void;

  constructor(parentNode: HTMLElement, gameOption: IQuizOption) {
    super(parentNode);
    console.log(gameOption);

    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => {
      this.onBack();
    };

    const homeButton = new Control(this.node, "button", "", "home");
    homeButton.node.onclick = () => {
      this.onHome();
    };
  }
}
