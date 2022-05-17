import Control from "../common/control";

interface IAppSetting {}

export class SettingPage extends Control {
  onBack: () => void;
  onSave: (setting: IAppSetting) => void;
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const backButton = new Control(this.node, "button", "", "back");
    backButton.node.onclick = () => this.onBack();

    const setting = {};
    const saveButton = new Control(this.node, "button", "", "save");
    saveButton.node.onclick = () => this.onSave(setting);
  }
}
