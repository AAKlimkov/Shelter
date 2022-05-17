import Control from "../common/control";
import { PaginationBlock } from "./PaginationBlock";
import { PetsNavigation } from "./PetsNavigation";
import "../../pages/pets/style.css";
import { shuffle } from "./shuffle";
import { PetsPopap } from "./PetsPopap";

const petsJSON = require("../pets.json");
const baseURL = petsJSON.imageURL;
interface IPetsState {
  baseLength: number;
  pageNumber: number;
  petsArray: Array<Array<number>>;
  lastPage: boolean;
}

let desctopPages = [
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
  shuffle([0, 1, 2, 3, 4, 5, 6, 7]),
];

let third = desctopPages[1]
  .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
  .slice(4)
  .concat(
    desctopPages[1].filter((el) => desctopPages[0].slice(6).indexOf(el) >= 0)
  );
// let thirth = desctopPages[4]
//   .filter((el) => desctopPages[3].slice(6).indexOf(el) < 0)
//   .slice(4)
//   .concat(
//     desctopPages[4].filter((el) => desctopPages[3].slice(6).indexOf(el) >= 0)
//   );

const tabletPages = [
  desctopPages[0].slice(0, 6),
  desctopPages[0]
    .slice(6)
    .concat(
      desctopPages[1]
        .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
        .slice(0, 4)
    ),
  third.concat(
    desctopPages[2].filter((el) => third.indexOf(el) < 0).slice(0, 2)
  ),
  desctopPages[2]
    .filter((el) => third.indexOf(el) < 0)
    .slice(2)
    .concat(desctopPages[2].filter((el) => third.indexOf(el) >= 0)),
  desctopPages[0].slice(0, 6),
  desctopPages[0]
    .slice(6)
    .concat(
      desctopPages[1]
        .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
        .slice(0, 4)
    ),
  third.concat(
    desctopPages[2].filter((el) => third.indexOf(el) < 0).slice(0, 2)
  ),
  desctopPages[2]
    .filter((el) => third.indexOf(el) < 0)
    .slice(2)
    .concat(desctopPages[2].filter((el) => third.indexOf(el) >= 0))
  // desctopPages[3].slice(0, 6),
  // desctopPages[3]
  //   .slice(6)
  //   .concat(
  //     desctopPages[4]
  //       .filter((el) => desctopPages[3].slice(6).indexOf(el) < 0)
  //       .slice(0, 4)
  //   ),
  // thirth.concat(
  //   desctopPages[4].filter((el) => thirth.indexOf(el) < 0).slice(0, 2)
  // ),
  // desctopPages[5]
  //   .filter((el) => thirth.indexOf(el) < 0)
  //   .slice(2)
  //   .concat(desctopPages[5].filter((el) => thirth.indexOf(el) >= 0)),
];
const mobTemp = desctopPages[0]
  .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
  .slice(0, 1);
const mobTemp2 = desctopPages[2]
  .filter(
    (el) =>
      desctopPages[1]
        .filter((el) => mobTemp.indexOf(el) < 0)
        .slice(6)
        .indexOf(el) < 0
  )
  .slice(0, 2);
const moblePages = [
  desctopPages[0].slice(0, 3),
  desctopPages[0].slice(3, 6),
  desctopPages[0]
    .slice(6)
    .concat(
      desctopPages[1]
        .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
        .slice(0, 1)
    ),
  desctopPages[1].filter((el) => mobTemp.indexOf(el) < 0).slice(0, 3),
  desctopPages[1].filter((el) => mobTemp.indexOf(el) < 0).slice(3, 6),
  desctopPages[1]
    .filter((el) => mobTemp.indexOf(el) < 0)
    .slice(6)
    .concat(
      desctopPages[2]
        .filter(
          (el) =>
            desctopPages[1]
              .filter((el) => mobTemp.indexOf(el) < 0)
              .slice(6)
              .indexOf(el) < 0
        )
        .slice(0, 2)
    ),
  desctopPages[2].filter((el) => mobTemp2.indexOf(el) < 0).slice(0, 3),
  desctopPages[2].filter((el) => mobTemp2.indexOf(el) < 0).slice(3, 6),
  desctopPages[0].slice(0, 3),
  desctopPages[0].slice(3, 6),
  desctopPages[0]
    .slice(6)
    .concat(
      desctopPages[1]
        .filter((el) => desctopPages[0].slice(6).indexOf(el) < 0)
        .slice(0, 1)
    ),
  desctopPages[1].filter((el) => mobTemp.indexOf(el) < 0).slice(0, 3),
  desctopPages[1].filter((el) => mobTemp.indexOf(el) < 0).slice(3, 6),
  desctopPages[1]
    .filter((el) => mobTemp.indexOf(el) < 0)
    .slice(6)
    .concat(
      desctopPages[2]
        .filter(
          (el) =>
            desctopPages[1]
              .filter((el) => mobTemp.indexOf(el) < 0)
              .slice(6)
              .indexOf(el) < 0
        )
        .slice(0, 2)
    ),
  desctopPages[2].filter((el) => mobTemp2.indexOf(el) < 0).slice(0, 3),
  desctopPages[2].filter((el) => mobTemp2.indexOf(el) < 0).slice(3, 6),
];

export class Pagination extends Control {
  state: IPetsState;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "pets-container");
    this.state = {
      baseLength: 48,
      pageNumber: 1,
      petsArray: [],
      lastPage: false,
    };
    this.petCycle();
    console.log(tabletPages);

    window.addEventListener("resize", (e) => {
      if (document.documentElement.clientWidth > 1279) {
        this.state.petsArray = desctopPages;
      } else if (document.documentElement.clientWidth > 767) {
        this.state.petsArray = tabletPages;
      } else if (document.documentElement.clientWidth >= 320) {
        this.state.petsArray = moblePages;
      }
    });
  }

  private petCycle() {
    if (document.documentElement.clientWidth > 1279) {
      this.state.petsArray = desctopPages;
    } else if (document.documentElement.clientWidth > 767) {
      this.state.petsArray = tabletPages;
    } else if (document.documentElement.clientWidth >= 320) {
      this.state.petsArray = moblePages;
    }
    this.state.lastPage =
      this.state.pageNumber ===
      this.state.baseLength / this.state.petsArray[0].length;

    const petsTitle = new Control(this.node, "div", "pets-content-title");
    petsTitle.node.innerHTML = " Our friends who <br>are looking for a house";
    let paginationBlock = new PaginationBlock(
      this.node,
      this.state.petsArray[this.state.pageNumber - 1]
    );
    paginationBlock.onModal = (petCard) => {
      const modal = new PetsPopap(this.node, petCard);
      document.body.classList.add("lock");
    };

    let petNav = new PetsNavigation(
      this.node,
      this.state.pageNumber,
      this.state.lastPage
    );
    petNav.onPlusOne = () => {
      if (!this.state.lastPage) {
        petsTitle.destroy();
        paginationBlock.destroy();
        petNav.destroy();
        this.state.pageNumber += 1;
        this.petCycle();
      }
    };
    petNav.onMinusOne = () => {
      if (this.state.pageNumber != 1) {
        petsTitle.destroy();
        paginationBlock.destroy();
        petNav.destroy();
        this.state.pageNumber -= 1;
        this.petCycle();
      }
    };
    petNav.onLastPage = () => {
      petsTitle.destroy();
      paginationBlock.destroy();
      petNav.destroy();
      this.state.pageNumber =
        this.state.baseLength / this.state.petsArray[0].length;
      this.petCycle();
    };
    petNav.onFirstPage = () => {
      petsTitle.destroy();
      paginationBlock.destroy();
      petNav.destroy();
      this.state.pageNumber = 1;
      this.petCycle();
    };
  }
}
