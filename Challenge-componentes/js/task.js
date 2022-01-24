import { TASKS } from '../models/task.data.js';
import TaskModel from '../models/task.model.js';
import StoreTasks from '../services/store.js';
import Component from './component.js';
/* menu2 */

export default class Task extends Component {
  constructor(selector) {
    super();
    this.selector = selector;
    this.taskList = StoreTasks.getTasks();
    this.#updateComponent();
  }

  #updateComponent() {
    console.log(this.taskList);
    this.template = this.#createTemplate();
    this.render(this.selector, this.template);
    this.#manageForm();
    this.#manageList();
  }

  #createTemplate() {
    let formAddTask = `
      <form>
        <div class="form-group">
          <label for="task-title">Hero name:</label><br/>
          <input type="text"
            class="form-control" name="task-title" id="task-title">
        </div>
        <button type="submit">Add hero</button>
      </form>
      `;
    let template = `
    <h2>My Heroes</h2>

    ${formAddTask}

    <ul>`;
    this.taskList.forEach((item, i) => {
      template += `<li><a class= "header-template__item"
    href="${item.path}">${item.id} | ${item.heroName}</a>
      <span class="task__delete-button"
      data-index="${i}">X</span></li>`;
    });
    template += `</ul>`;
    return template;
  }

  #manageForm() {
    const componentElement = document.querySelector(this.selector);
    const inputElements =
      componentElement.querySelectorAll('input[type="text"]');
    const formElement = componentElement.querySelector('form');
    formElement.addEventListener('submit', (ev) => {
      console.log(ev);
      ev.preventDefault();
      this.taskList.push(
        new TaskModel(inputElements[0].value, inputElements[1].value)
      );
      StoreTasks.setTasks(this.taskList);
      this.#updateComponent();
    });
  }

  #manageList() {
    const componentElement = document.querySelector(this.selector);
    const deleteElements = componentElement.querySelectorAll(
      '.task__delete-button'
    );
    deleteElements.forEach((item) => {
      item.addEventListener('click', (ev) => {
        this.taskList.splice(ev.target.dataset.index, 1);
        StoreTasks.setTasks(this.taskList);
        this.#updateComponent();
      });
    });
  }
}
