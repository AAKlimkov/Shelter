import Control from "../common/control";
import { SettingPage } from "./settingPage";
import { GameFieldPage } from "./gameFieldPage";
import { CategoriesPage } from "./categoriesPage";
import { CarouselPage } from "./carouselPage";
import { StartPage } from "./startPage";
import { Pagination } from "./pagination";
import { PetsPopap } from "./PetsPopap";

export class App extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.mainCycle();
  }

  private mainCycle() {
    const startPage = new StartPage(this.node);
    startPage.onGameSelect = (gameName) => {
      startPage.destroy();
      const categories = new CategoriesPage(this.node, gameName);
      categories.onBack = () => {
        categories.destroy();
        this.mainCycle();
      };
      categories.onSelect = (index) => {
        const gameField = new GameFieldPage(this.node, {
          gameName: gameName,
          categoryIndex: index,
        });
        gameField.onHome = () => {
          this.mainCycle();
        };
      };
    };

    startPage.onSettings = () => {
      startPage.destroy();
      const settingPage = new SettingPage(this.node);
      settingPage.onBack = () => {
        settingPage.destroy();
        this.mainCycle();
      };
      settingPage.onSave = (setting) => {
        console.log(setting);

        settingPage.destroy();
        this.mainCycle();
      };
    };

    startPage.onCorousel = () => {
      startPage.destroy();
      const corouselButton = new CarouselPage(this.node);
      corouselButton.onBack = () => {
        corouselButton.destroy();
        this.mainCycle();
      };
    };

    startPage.onPagination = () => {
      startPage.destroy();
      let pagination = new Pagination(this.node);
    };
  }
}
