import Component from './component.js';

export default class Options extends Component {
  constructor(menuItems) {
    super();
    this.menuItems = menuItems;
    this.template = this.createTemplate();
  }

  createTemplate() {
    let menu = '<nav><ul class="main-menu">';
    this.menuItems.forEach((item) => {
      menu += `<li><a class= "main-menu__item"
    href="${item.path}">${item.label}</a></li>`;
    });
    menu += '</ul></nav>';
    return menu;
  }
}
