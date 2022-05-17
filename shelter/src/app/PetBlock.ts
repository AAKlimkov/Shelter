import Control from "../common/control";
import { PetsCard } from "./petCard";
import { PetsPopap } from "./PetsPopap";

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

export class PetBlock extends Control {
  onModal: (petCard: IPet) => void;
  constructor(parentNode: HTMLElement, arr: Array<number>) {
    super(parentNode, "div", "pets-block");

    petsJSON.pets.map((el: { name: string; img: string }, ind: number) => {
      if (arr.includes(ind)) {
        const petCard = new PetsCard(this.node, el.name, baseURL + el.img);
        petCard.node.onclick = () => {
          const modal = new PetsPopap(this.node,  petsJSON.pets[ind]);
          document.body.classList.add('lock')
        };
      }
    });
  }
}
