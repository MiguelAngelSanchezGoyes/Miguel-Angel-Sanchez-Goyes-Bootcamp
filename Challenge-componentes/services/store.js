import { TASKS } from '../models/task.data.js';

const storeName = 'Heroes';

export default class StoreTasks {
  static getTasks() {
    /* return localStorage.getItem(storeName)
      ? JSON.parse(localStorage.getItem(storeName))
      : TASKS; */
    let data = localStorage.getItem(storeName);
    if (data) {
      data = JSON.parse(data);
    } else {
      data = TASKS;
      this.setTasks(data);
    }
    return data;
  }

  static setTasks(tasks) {
    localStorage.setItem(storeName, JSON.stringify(tasks));
  }

  static removeTasks() {
    localStorage.removeItem(storeName);
  }
}
