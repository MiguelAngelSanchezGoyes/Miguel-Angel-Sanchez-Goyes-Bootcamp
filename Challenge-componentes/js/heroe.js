import Header from './header.js';
import Task from './task.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('About loaded');
  new Header('.header');
  new Task('.main');
});
