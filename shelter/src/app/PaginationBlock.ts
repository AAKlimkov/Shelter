import Control from "../common/control";
import { PetsCard } from "./petCard";

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

export class PaginationBlock extends Control {
  onModal: (petCard: IPet) => void;
  constructor(parentNode: HTMLElement, arr: Array<number>) {
    super(parentNode, "div", "card-container");
    const petCards: Array<PetsCard> = [];
    for (let i = 0; i < arr.length; i++) {
      const imgPath = baseURL + petsJSON.pets[arr[i]].img;
      const petCard = new PetsCard(
        this.node,
        petsJSON.pets[arr[i]].name,
        imgPath
      );
      petCard.node.onclick = () => {
        this.onModal(petsJSON.pets[arr[i]]);
      };
      petCards.push(petCard);
    }
  }
}
