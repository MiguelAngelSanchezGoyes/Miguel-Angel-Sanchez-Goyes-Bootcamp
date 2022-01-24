import Component from './component.js';

export default class Menu2 extends Component {
  constructor(menuItems) {
    super();
    this.menuItems = menuItems;
    this.template = this.createTemplate();
  }

  createTemplate() {
    let menu = `
    <ul>`;
    this.taskList.forEach((item, i) => {
      menu += `<li><a class= "header-template__item"
    href="../heroe1.html?id=${item.id}">${item.id} | ${item.heroName}</a>
      <span class="task__delete-button"
      data-index="${i}">X</span></li>`;
    });
    menu += `</ul>`;
    return menu;
  }
}
