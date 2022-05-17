import Control from "../common/control";

export class StartPage extends Control {
  onSettings: () => void;
  onGameSelect: (gameName : string) => void
  onCorousel: () => void;
  onPagination: () => void;
  onPetsPopap: () => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);

    const pictureButton = new Control(this.node, "button", "", "pictures");
    pictureButton.node.onclick = () => this.onGameSelect('pictures')

    const artistsButton = new Control(this.node, "button", "", "artists");
    artistsButton.node.onclick = () => this.onGameSelect('artists')

    const settingButton = new Control(this.node, "button", "", "setting");
    settingButton.node.onclick = () => this.onSettings()

    const corouselButton = new Control(this.node, "button", "", "corousel");
    corouselButton.node.onclick = () => this.onCorousel()

    const PaginationButton = new Control(this.node, "button", "", "pagination");
    PaginationButton.node.onclick = () => this.onPagination()

    const PopapButton = new Control(this.node, "button", "", "petsPopap");
    PopapButton.node.onclick = () => this.onPetsPopap()

   
  }
}
