import Component from './component.js';
import Menu from './options.js';

export default class Main extends Component {
  constructor(selector = '') {
    super();
    this.selector = selector;
    this.menuItems = [
      { path: 'heroe1.html', label: 'Narco' },
      { path: 'heroe2.html', label: 'Bombasto' },
      { path: 'heroe3.html', label: 'Celeritas' },
      { path: 'heroe4.html', label: 'Magneta' },
    ];
    this.menu = new Menu(this.menuItems).createTemplate();
    this.template = this.#createRender();
    this.render(this.selector, this.template);
  }

  #createRender() {
    const template = `
      <div class="main__header">
        <h2 class="main__title">Top Heroes</h2>
        ${this.menu}
      </div>
      `;
    return template;
  }
}
